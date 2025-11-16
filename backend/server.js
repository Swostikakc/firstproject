import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import venueRoutes from './routes/venues.js';
import bookingRoutes from './routes/bookings.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  credentials: true,
  methods: ['GET','POST','PUT','DELETE']
}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/bookings', bookingRoutes);

// Root & health check
app.get('/', (req, res) => res.send('PartyPal API is running...'));
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Event Center API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/eventcenter';
mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) console.error('❌ Server failed to start:', err);
  else console.log(`🚀 Server running on port ${PORT}`);
});

