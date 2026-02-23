# Homelink - Professional Home Services Platform

A full-stack, role-based platform for connecting customers with home service professionals (inspired by inDrive).

## 🚀 Features

- **Role-Based Architecture**: Separate flows for Customers, Workers, and Admins.
- **Real-Time Interaction**: Socket.io integration for live negotiations and booking updates.
- **Dynamic Pricing**: Customers suggest prices, workers can counter-offer in real-time.
- **Secure Authentication**: JWT-based auth with role-protected frontend and backend routes.
- **Modern UI**: Minimalist black & white design with Lucide icons and Tailwind CSS.
- **Availability Management**: Workers can toggle their online/offline status.

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Lucide Icons, Socket.io Client.
- **Backend**: Node.js, Express, MongoDB, Mongoose, Socket.io, JWT, Bcrypt.

## 📦 Project Structure

```bash
homelink/
├── backend/
│   ├── config/         # DB connection
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth & Role protection
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Main entry point
└── frontend/
    ├── app/           # Next.js App Router (Pages & Layouts)
    ├── components/    # Reusable UI components
    ├── utils/         # Helper functions & Socket config
    └── middleware.js  # Role-based route guard
```

## 🚥 How to Run

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas)

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# PORT=5001
# MONGO_URI=mongodb://localhost:27017/homelink
# JWT_SECRET=your_secret_key
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
# Create .env.local with:
# NEXT_PUBLIC_API_URL=http://localhost:5001
npm run dev
```

## 🔐 Auth Details

- **Customer**: Access to `/customer/home`, `/customer/request`, `/customer/bookings`.
- **Worker**: Access to `/worker/dashboard`, `/worker/requests`.
- **Admin**: Access to `/admin/dashboard`.

## 🔄 Real-time Negotiation Flow

1. Customer creates a booking with a suggested price.
2. Worker receives real-time notification via Socket.io.
3. Worker counters with a new price.
4. Customer sees the counter-offer instantly and can Accept or Reject.
5. Upon acceptance, the worker is assigned and contact details are exchanged.
