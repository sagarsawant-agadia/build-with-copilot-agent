import mongoose from 'mongoose'

export async function connectDB(mongoUrl: string) {
  await mongoose.connect(mongoUrl)
  console.log('Connected to MongoDB')
}
