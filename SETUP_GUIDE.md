# Event Center Booking System - Setup Guide

## Overview
This is a full-stack event center booking website with:
- **Frontend**: React + Vite with Google Maps integration
- **Backend**: Node.js + Express + MongoDB
- **Features**: Location-based venue search, booking management, user authentication

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Google Maps API key

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eventcenter
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eventcenter?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret_key_here
CORS_ORIGIN=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```

Seed the database with sample venues:
```bash
npm run seed
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd myreactproject
npm install
```

Create a `.env` file in the `myreactproject` directory:
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
4. Create credentials (API Key)
5. Add the API key to your frontend `.env` file

## Features Implemented

### Frontend
- ✅ Enhanced map component with location search
- ✅ Venue markers on map
- ✅ Location-based venue filtering
- ✅ User authentication (Login/Register)
- ✅ Responsive design
- ✅ Venue listing and details

### Backend
- ✅ RESTful API for venues, bookings, and users
- ✅ MongoDB database with Mongoose
- ✅ Location-based venue search
- ✅ Booking management with conflict checking
- ✅ User authentication with bcrypt
- ✅ CORS enabled for frontend integration

## API Endpoints

### Venues
- `GET /api/venues` - Get all venues (with filters: location, minPrice, maxPrice, capacity, search)
- `GET /api/venues/:id` - Get single venue
- `POST /api/venues` - Create new venue
- `PUT /api/venues/:id` - Update venue
- `DELETE /api/venues/:id` - Delete venue
- `GET /api/venues/search/nearby?lat=28.2096&lng=83.9856&radius=5` - Search venues by location

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking
- `GET /api/bookings/availability/:venueId?startDate=2024-01-01&endDate=2024-01-02` - Check availability

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Register new user
- `POST /api/users/login` - User login
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Authentication

The system uses simple email/password authentication:
- Users can register with name, email, password, and optional phone
- Login credentials are stored in localStorage
- Backend uses bcrypt for password hashing
- JWT can be added later for enhanced security

## Next Steps

1. **Add JWT Authentication**: Implement JWT tokens for secure API access
2. **Add Booking Page**: Create a booking form with date picker
3. **Add My Bookings Page**: Show user's bookings
4. **Add Payment Integration**: Integrate payment gateway
5. **Add Email Notifications**: Send booking confirmations via email
6. **Add Reviews/Ratings**: Allow users to rate venues
7. **Add Admin Dashboard**: For managing venues and bookings

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify MongoDB connection string in `.env`
- Check if port 5000 is available

### Frontend can't connect to backend
- Verify `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend
- Ensure backend is running

### Map not loading
- Verify Google Maps API key is correct
- Check if Maps JavaScript API and Places API are enabled
- Check browser console for errors

## Project Structure

```
myproject/
├── backend/
│   ├── models/          # MongoDB models (Venue, Booking, User)
│   ├── routes/          # API routes
│   ├── scripts/         # Database seeding scripts
│   ├── server.js        # Express server
│   └── package.json
├── myreactproject/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── assets/      # Images and assets
│   └── package.json
└── SETUP_GUIDE.md
```

