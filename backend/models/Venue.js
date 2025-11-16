import mongoose from 'mongoose';

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Venue name is required'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  coordinates: {
    lat: {
      type: Number,
      required: [true, 'Latitude is required'],
    },
    lng: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
  },
  images: [{
    type: String,
  }],
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: 1,
  },
  amenities: [{
    type: String,
  }],
  description: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  contactInfo: {
    phone: String,
    email: String,
  },
}, {
  timestamps: true,
});

// Index for location-based searches
venueSchema.index({ 'coordinates.lat': 1, 'coordinates.lng': 1 });
venueSchema.index({ location: 'text', name: 'text' });

const Venue = mongoose.model('Venue', venueSchema);

export default Venue;

