const mongoose = require("mongoose");

const DB = process.env.DATABASE;

// const DB =
//   "mongodb+srv://techatach:FRgky1iwj2Xbm8ml@cluster0.djc3agv.mongodb.net/mernstack?retryWrites=true&w=majority";
// const DB = "mongodb://127.0.0.1:27017/mernstack";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected successfull"))
  .catch((error) => console.log(error.message));
