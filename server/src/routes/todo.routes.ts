import { Router } from "express";
const router = Router();

import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller";

router.get("/todos/", getTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
