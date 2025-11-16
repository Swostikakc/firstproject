import express from 'express';
import Venue from '../models/Venue.js';

const router = express.Router();

// GET all venues with filters
router.get('/', async (req, res) => {
  try {
    const { location, minPrice, maxPrice, capacity, search } = req.query;
    const query = {};

    if(location) {
      if(location.includes(',')) {
        const [lat, lng, radius = 5] = location.split(',').map(Number);
        query['coordinates.lat'] = { $gte: lat - radius/111, $lte: lat + radius/111 };
        query['coordinates.lng'] = { $gte: lng - radius/111, $lte: lng + radius/111 };
      } else {
        query.location = { $regex: location, $options: 'i' };
      }
    }

    if(minPrice || maxPrice) {
      query.price = {};
      if(minPrice) query.price.$gte = Number(minPrice);
      if(maxPrice) query.price.$lte = Number(maxPrice);
    }

    if(capacity) query.capacity = { $gte: Number(capacity) };
    if(search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    query.isAvailable = true;
    const venues = await Venue.find(query).populate('owner', 'name email');
    res.json(venues);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single venue
router.get('/:id', async (req,res)=>{
  try {
    const venue = await Venue.findById(req.params.id).populate('owner','name email phone');
    if(!venue) return res.status(404).json({ message: 'Venue not found' });
    res.json(venue);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create venue
router.post('/', async (req,res)=>{
  try {
    const venue = new Venue(req.body);
    const savedVenue = await venue.save();
    res.status(201).json(savedVenue);
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update venue
router.put('/:id', async (req,res)=>{
  try {
    const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators:true });
    if(!venue) return res.status(404).json({ message:'Venue not found' });
    res.json(venue);
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE venue
router.delete('/:id', async (req,res)=>{
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if(!venue) return res.status(404).json({ message:'Venue not found' });
    res.json({ message:'Venue deleted successfully' });
  } catch(error) {
    res.status(500).json({ message:error.message });
  }
});

// Nearby search
router.get('/search/nearby', async (req,res)=>{
  try{
    const { lat, lng, radius=5 } = req.query;
    if(!lat || !lng) return res.status(400).json({ message:'Latitude and longitude required' });

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const radiusDeg = parseFloat(radius)/111;

    const venues = await Venue.find({
      'coordinates.lat': {$gte: latitude-radiusDeg, $lte: latitude+radiusDeg},
      'coordinates.lng': {$gte: longitude-radiusDeg, $lte: longitude+radiusDeg},
      isAvailable:true
    });

    const venuesWithDistance = venues.map(venue=>{
      const distance = calculateDistance(latitude,longitude,venue.coordinates.lat,venue.coordinates.lng);
      return { ...venue.toObject(), distance: distance.toFixed(2) };
    });

    venuesWithDistance.sort((a,b)=>a.distance-b.distance);
    res.json(venuesWithDistance);

  } catch(error) {
    res.status(500).json({ message:error.message });
  }
});

function calculateDistance(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.sin(dLon/2)**2;
  const c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  return R*c;
}

function deg2rad(deg){ return deg*(Math.PI/180); }

export default router;


