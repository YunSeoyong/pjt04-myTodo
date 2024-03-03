import mongoose, { Document } from "mongoose";

export interface Todo {
    content: string;
    date: Date;
    isDone: boolean;
}

export interface TodoDocument extends Todo, Document {}

const todoSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        date: { type: Date, required: true },
        isDone: { type: Boolean, required: true },
    } 
);

export const TodoModel = mongoose.model<TodoDocument>("Todo", todoSchema);
