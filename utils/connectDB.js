import mongoose from 'mongoose'

export default function connectDB() {
 if (mongoose.connections[0].readyState) {
  console.log('Already connected')
  return
 }
 mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
 }, err => {
  if (err) throw err
  console.log('connect to mongodb..')
 })
}

