const mongoose = require('mongoose');


const connectDB = async ()=>{
  const conn = await  mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify:false,
      // useUnifiedTopology: true,
       // retry to connect for 60 times
       reconnectTries: 60,
       // wait 1 second before retrying
       reconnectInterval: 1000
  });

  console.log(`mongodb connected ${conn.connection.host}`.bgBlue.bold);
}

module.exports = connectDB;