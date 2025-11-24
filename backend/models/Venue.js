// ============================================
// VENUE MODEL
// backend/models/Venue.js
// ============================================

import mongoose from 'mongoose';

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Venue name is required'],
    trim: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  area: {
    type: String, // e.g., "Lakeside", "Newroad", etc.
    required: true
  },
  images: [{
    type: String // URL or path to image
  }],
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  rating: {
    type: Number,
    default: 4.0,
    min: 0,
    max: 5
  },
  capacity: {
    type: Number,
    default: 200
  },
  amenities: [{
    type: String
  }],
  description: {
    type: String,
    default: ''
  },
  contactNumber: {
    type: String
  },
  email: {
    type: String
  },
  availableDates: [{
    type: Date
  }],
  bookedDates: [{
    type: Date
  }],
  popular: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create 2dsphere index for geospatial queries
venueSchema.index({ location: '2dsphere' });
venueSchema.index({ area: 1 });
venueSchema.index({ price: 1 });
venueSchema.index({ rating: -1 });

// Virtual for latitude
venueSchema.virtual('latitude').get(function() {
  return this.location.coordinates[1];
});

// Virtual for longitude
venueSchema.virtual('longitude').get(function() {
  return this.location.coordinates[0];
});

// Include virtuals in JSON
venueSchema.set('toJSON', { virtuals: true });
venueSchema.set('toObject', { virtuals: true });

// Pre-save middleware to update updatedAt
venueSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Venue = mongoose.model('Venue', venueSchema);

export default Venue;

