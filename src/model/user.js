const mongoose = require('mongoose');
const any = require('../plugin/any');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['ADMIN','STAFF','MEMBER'],
    required: true
  },
});

userSchema.plugin(any)


// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

userSchema.methods.matchPassword = function (password) {
  return password == this.password
};

module.exports = mongoose.model('User', userSchema);