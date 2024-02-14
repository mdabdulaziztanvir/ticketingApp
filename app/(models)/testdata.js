import mongoose, { Schema } from "mongoose";
// connect to data base
mongoose.connect(process.env.MONGODB_URI);
// new promise to do something
mongoose.Promise = global.Promise;

const testDataSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

const TestData = mongoose.models.TestData || mongoose.model("TestData", testDataSchema)

export default TestData;