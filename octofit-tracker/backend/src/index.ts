import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db'

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB(MONGO_URL).catch(err => {
  console.error('Failed to connect to MongoDB:', err)
  process.exit(1)
})

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`OctoFit backend listening on http://localhost:${PORT}`)
})
