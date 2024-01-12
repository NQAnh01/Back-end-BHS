const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    phone: { type: Number, required: true },
    address: { type: String },
    avatar: { type: String },
    city: { type: String },
    // access_token: { type: String, required: true },
    // refresh_token: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
