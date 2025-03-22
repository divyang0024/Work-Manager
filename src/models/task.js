import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export { Task };
