const app = require("./App");
// const mongoose= require('mongoose')

// const connect = async () => {
//   const URL = 'mongodb+srv://admin:admin3@cluster0.2p4p2kb.mongodb.net/Recipe-maker?retryWrites=true&w=majorit';
//   try {
//     await mongoose.connect(URL, { serverSelectionTimeoutMS: 5000 });
//     console.log('MongoDB successfully connected');
//   } catch (error) {
//     console.log('Error connecting to database:', error.message);
//   }
// };

const PORT = process.env.PORT || 8080;
//server port
app.listen(PORT, () => {
  connect();
  console.log("server is running");
});