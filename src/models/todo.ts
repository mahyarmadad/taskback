import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", TodoSchema);
