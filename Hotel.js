/** @format */

import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requird: true,
  },
  type: {
    type: String,
    requird: true,
  },
  city: {
    type: String,
    requird: true,
  },
  address: {
    type: String,
    requird: true,
  },
  distance: {
    type: String,
    requird: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    requird: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    requird: true,
  },
});
