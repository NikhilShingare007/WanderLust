require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ATLASDB_URL)
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
