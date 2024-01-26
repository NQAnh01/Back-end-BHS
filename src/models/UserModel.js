const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    phone: { type: Number },
    address: { type: String },
    avatar: { type: String },
    city: { type: String },
    access_token: { type: String },
    refresh_token: { type: String },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
