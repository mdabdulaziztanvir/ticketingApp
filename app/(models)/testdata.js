import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.promise = global.promise;

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