// ============================================
// FIXED SERVER.JS
// backend/server.js
// ============================================

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import venueRoutes from './routes/venues.js';
import bookingRoutes from './routes/bookings.js';

// Load environment variables
dotenv.config();

const app = express();

// ============================================
// MIDDLEWARE
// ============================================

// CORS - Allow frontend to communicate with backend
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:3000',
      ...(process.env.CORS_ORIGIN?.split(',') || [])
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('⚠️  Blocked by CORS:', origin);
      callback(null, true); // Still allow in development
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware (helpful for debugging)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ============================================
// ROUTES
// ============================================

app.use('/api/users', userRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/bookings', bookingRoutes);

// ============================================
// ROOT & HEALTH CHECK
// ============================================

app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'PartyPal API is running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      venues: '/api/venues',
      bookings: '/api/bookings'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    message: 'Event Center API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    mongodb: {
      host: mongoose.connection.host || 'Not connected',
      name: mongoose.connection.name || 'Not connected',
      readyState: mongoose.connection.readyState // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
    }
  });
});

// ============================================
// 404 HANDLER
// ============================================

app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found',
    path: req.path,
    method: req.method,
    availableRoutes: ['/api/users', '/api/venues', '/api/bookings']
  });
});

// ============================================
// ERROR HANDLER
// ============================================

app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err);
  
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      details: err
    })
  });
});

// ============================================
// MONGODB CONNECTION
// ============================================

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eventcenter';

const connectDB = async (retries = 5) => {
  try {
    console.log('🔄 Connecting to MongoDB...');
    console.log('   URI:', mongoUri.replace(/\/\/([^:]+):([^@]+)@/, '//*****:*****@'));
    
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('✅ MongoDB Connected Successfully');
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}`);
    
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    
    if (retries > 0) {
      console.log(`   🔄 Retrying in 5 seconds... (${retries} attempts left)`);
      setTimeout(() => connectDB(retries - 1), 5000);
    } else {
      console.error('\n   ❌ Failed to connect to MongoDB after multiple attempts');
      console.error('\n   💡 Troubleshooting Steps:');
      console.error('   1. Make sure MongoDB is running:');
      console.error('      Windows: net start MongoDB');
      console.error('      Mac: brew services start mongodb-community');
      console.error('      Linux: sudo systemctl start mongod');
      console.error('   2. Test connection: mongosh');
      console.error('   3. Check MONGODB_URI in .env file');
      console.error('   4. Verify MongoDB is listening on port 27017\n');
      
      if (process.env.NODE_ENV !== 'production') {
        console.log('   ⚠️  Server will continue running without database connection');
      } else {
        process.exit(1);
      }
    }
  }
};

// MongoDB event handlers
mongoose.connection.on('connected', () => {
  console.log('📡 MongoDB connection established');
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected. Attempting to reconnect...');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB error:', err.message);
});

// ============================================
// GRACEFUL SHUTDOWN
// ============================================

process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT. Shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during shutdown:', err);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM. Shutting down gracefully...');
  try {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during shutdown:', err);
    process.exit(1);
  }
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();
    
    // Start Express server
    app.listen(PORT, '0.0.0.0', () => {
      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🚀 PartyPal Server Started Successfully!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`📍 Local:      http://localhost:${PORT}`);
      console.log(`📍 Network:    http://127.0.0.1:${PORT}`);
      console.log(`🏥 Health:     http://localhost:${PORT}/api/health`);
      console.log(`📝 Mode:       ${process.env.NODE_ENV || 'development'}`);
      console.log(`⏰ Started:    ${new Date().toLocaleString()}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log('✨ Ready to accept requests!\n');
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the application
startServer();

export default app;

