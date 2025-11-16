import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue',
    required: [true, 'Venue is required'],
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
  },
  numberOfGuests: {
    type: Number,
    required: [true, 'Number of guests is required'],
    min: 1,
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: 0,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
  eventType: {
    type: String,
    enum: ['wedding', 'corporate', 'social', 'exhibition', 'concert', 'other'],
  },
  specialRequests: {
    type: String,
    trim: true,
  },
  contactInfo: {
    name: String,
    phone: String,
    email: String,
  },
}, {
  timestamps: true,
});

// Index for date-based queries
bookingSchema.index({ venue: 1, startDate: 1, endDate: 1 });
bookingSchema.index({ user: 1 });

// Validation: endDate must be after startDate
bookingSchema.pre('save', function(next) {
  if (this.endDate <= this.startDate) {
    next(new Error('End date must be after start date'));
  } else {
    next();
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

