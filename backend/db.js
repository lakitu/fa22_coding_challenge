const mongoose = require("mongoose");

const dbPassword = "Bz0X8nHDSPl4KQH6"; // were this a true application, I would put this in a .env file

module.exports = async () => {
  try {
    const connectionParams = { 
      useNewUrlParser: true,
    };
    await mongoose.connect(
      `mongodb+srv://Krishin91:${dbPassword}@krishinhack4impact.p0cgrv0.mongodb.net/?retryWrites=true&w=majority`,
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
