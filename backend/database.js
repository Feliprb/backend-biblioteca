const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/biblioteca";
//mongodb://localhost:27017
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(`Mongo is disconnected`);
    process.exit(0)
  });
});

module.exports = mongoose;