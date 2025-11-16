# Event Center Booking Backend API

Backend API for the Event Center Booking System built with Node.js, Express, and MongoDB.

## Features

- RESTful API for venues, bookings, and users
- Location-based venue search
- Booking management with date conflict checking
- MongoDB database with Mongoose ODM
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

3. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/eventcenter
PORT=5000
```

4. Make sure MongoDB is running on your system, or use MongoDB Atlas.

5. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Venues
- `GET /api/venues` - Get all venues (with optional filters: location, minPrice, maxPrice, capacity, search)
- `GET /api/venues/:id` - Get single venue
- `POST /api/venues` - Create new venue
- `PUT /api/venues/:id` - Update venue
- `DELETE /api/venues/:id` - Delete venue
- `GET /api/venues/search/nearby?lat=28.2096&lng=83.9856&radius=5` - Search venues by location

### Bookings
- `GET /api/bookings` - Get all bookings (with optional filters: userId, venueId, status)
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking
- `GET /api/bookings/availability/:venueId?startDate=2024-01-01&endDate=2024-01-02` - Check venue availability

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `POST /api/users/login` - User login

## Database Models

### Venue
- name, location, coordinates (lat, lng)
- images, price, capacity
- amenities, description
- rating, numberOfReviews
- owner (User reference)
- isAvailable

### Booking
- user (User reference)
- venue (Venue reference)
- startDate, endDate
- numberOfGuests, totalPrice
- status (pending, confirmed, cancelled, completed)
- eventType, specialRequests
- contactInfo

### User
- name, email, password
- phone, role (customer, venue_owner, admin)

## Example Requests

### Create a Venue
```json
POST /api/venues
{
  "name": "Silver Plate Party Palace",
  "location": "Bastola Thar - 9, Pokhara",
  "coordinates": {
    "lat": 28.21600,
    "lng": 83.99100
  },
  "images": ["image1.jpg"],
  "price": 65000,
  "capacity": 500,
  "amenities": ["Parking", "AC", "Sound System"],
  "description": "Beautiful venue for events"
}
```

### Create a Booking
```json
POST /api/bookings
{
  "user": "user_id_here",
  "venue": "venue_id_here",
  "startDate": "2024-01-15T10:00:00Z",
  "endDate": "2024-01-15T22:00:00Z",
  "numberOfGuests": 200,
  "eventType": "wedding",
  "specialRequests": "Need extra chairs"
}
```

