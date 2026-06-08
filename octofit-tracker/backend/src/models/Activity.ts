import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema({
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number },
  date: { type: Date, default: () => new Date() }
}, { timestamps: true })

export const Activity = mongoose.model('Activity', activitySchema)
