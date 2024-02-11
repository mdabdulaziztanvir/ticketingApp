import mongoose, { Schema } from "mongoose";
// connect to data base
mongoose.connect(process.env.MONGODB_URI);
// new promise to do something
mongoose.Promise = global.Promise;
// make a new schema
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    priority: Number,
    progress: Number,
    status: String,
    category: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
