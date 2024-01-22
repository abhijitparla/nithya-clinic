import mongoose from 'mongoose'

const MONGO_URI = 'mongodb://localhost/your-database-name';

mongoose.connect(MONGO_URI, {
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: any) => {
    console.error('Error connecting to MongoDB:', error);
  });