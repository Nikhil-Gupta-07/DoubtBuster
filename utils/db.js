import mongoose from 'mongoose'

// connecting to database
const connectDB = async () => {
  const connectionUrl =
<<<<<<< HEAD
    'mongodb+srv://deepbhai:deepbhai@cluster0.mxp3j0e.mongodb.net/?retryWrites=true&w=majority'
=======
    'mongodb+srv://deepbhai:deepbhai@cluster0.mxp3j0e.mongodb.net/'
>>>>>>> fa291319871dcb192677e87e129ef47181874ffb
  mongoose
    .connect(connectionUrl, {
      dbName: 'work_manager',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) =>
      console.log('Getting Error from DB connection' + err.message)
    )
  mongoose.set('strictQuery', false)
}

export default connectDB
