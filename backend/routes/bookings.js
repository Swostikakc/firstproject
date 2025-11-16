import express from 'express';
import Booking from '../models/Booking.js';
import Venue from '../models/Venue.js';

const router = express.Router();

// GET all bookings (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { userId, venueId, status } = req.query;
    const query = {};

    if (userId) query.user = userId;
    if (venueId) query.venue = venueId;
    if (status) query.status = status;

    const bookings = await Booking.find(query)
      .populate('user', 'name email phone')
      .populate('venue', 'name location price images')
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('user', 'name email phone')
      .populate('venue', 'name location price images coordinates');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new booking
router.post('/', async (req, res) => {
  try {
    const { venue, startDate, endDate, numberOfGuests, user, eventType, specialRequests, contactInfo } = req.body;

    // Validate venue exists
    const venueDoc = await Venue.findById(venue);
    if (!venueDoc) {
      return res.status(404).json({ message: 'Venue not found' });
    }

    // Check if venue is available for the requested dates
    const conflictingBooking = await Booking.findOne({
      venue,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: new Date(endDate) },
          endDate: { $gte: new Date(startDate) },
        },
      ],
    });

    if (conflictingBooking) {
      return res.status(400).json({
        message: 'Venue is already booked for the selected dates',
      });
    }

    // Calculate total price
    const days = Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = venueDoc.price * days;

    const booking = new Booking({
      user,
      venue,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      numberOfGuests,
      totalPrice,
      eventType,
      specialRequests,
      contactInfo,
      status: 'pending',
    });

    const savedBooking = await booking.save();
    const populatedBooking = await Booking.findById(savedBooking._id)
      .populate('user', 'name email')
      .populate('venue', 'name location price');

    res.status(201).json(populatedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update booking
router.put('/:id', async (req, res) => {
  try {
    const { status, startDate, endDate, numberOfGuests } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // If dates are being updated, check for conflicts
    if (startDate || endDate) {
      const newStartDate = startDate ? new Date(startDate) : booking.startDate;
      const newEndDate = endDate ? new Date(endDate) : booking.endDate;

      const conflictingBooking = await Booking.findOne({
        venue: booking.venue,
        _id: { $ne: booking._id },
        status: { $in: ['pending', 'confirmed'] },
        $or: [
          {
            startDate: { $lte: newEndDate },
            endDate: { $gte: newStartDate },
          },
        ],
      });

      if (conflictingBooking) {
        return res.status(400).json({
          message: 'Venue is already booked for the selected dates',
        });
      }

      // Recalculate price if dates changed
      if (startDate || endDate) {
        const venue = await Venue.findById(booking.venue);
        const days = Math.ceil(
          (newEndDate - newStartDate) / (1000 * 60 * 60 * 24)
        );
        booking.totalPrice = venue.price * days;
      }
    }

    // Update fields
    if (status) booking.status = status;
    if (startDate) booking.startDate = new Date(startDate);
    if (endDate) booking.endDate = new Date(endDate);
    if (numberOfGuests) booking.numberOfGuests = numberOfGuests;

    const updatedBooking = await booking.save();
    const populatedBooking = await Booking.findById(updatedBooking._id)
      .populate('user', 'name email')
      .populate('venue', 'name location price');

    res.json(populatedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET availability for a venue
router.get('/availability/:venueId', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({
        message: 'Start date and end date are required',
      });
    }

    const conflictingBooking = await Booking.findOne({
      venue: req.params.venueId,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: new Date(endDate) },
          endDate: { $gte: new Date(startDate) },
        },
      ],
    });

    res.json({
      available: !conflictingBooking,
      message: conflictingBooking
        ? 'Venue is not available for the selected dates'
        : 'Venue is available for the selected dates',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

