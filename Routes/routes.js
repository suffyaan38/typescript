"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "TODO added" });
});
router.delete('/delTodo:id', (req, res, next) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "todo deleted" });
});
exports.default = router;
