
import express from "express";
import mongoose from "mongoose";
import { TodoModel, TodoDocument } from "./models/todo";

const app = express();
const PORT = 3000;
const dbConnect = require('../config/dbConnect');

dbConnect();
app.use(express.json());

// Define routes for CRUD operations
app.get("/todos", async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/todos", async (req, res) => {
    const todo = new TodoModel({
        content: req.body.content,
        date: new Date(),
        isDone: false,
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put("/todos/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete("/todos/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await TodoModel.findByIdAndDelete(id);
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
