import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const dbString = process.env.MONGO_DB;
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const connection = mongoose.createConnection(dbString, dbOptions);

    console.log("Connected database");
  } catch (error) {
    console.log(error);
  }
};

export default connectionDB;
