import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String, // ✅ lowercase
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // ✅ correct spelling
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
