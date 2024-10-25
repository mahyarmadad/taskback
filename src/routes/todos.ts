import { Request, Response, Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) res.status(404).json({ message: "Todo not found" });
    else res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed,
      },
      {
        new: true,
      }
    );
    if (!updatedTodo) res.status(404).json({ message: "Todo not found" });
    else res.status(202).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleted = await Todo.findByIdAndDelete(id);
  if (!deleted) res.status(404).json({ message: "Todo not found" });
  else res.status(204).json({ message: "deleted successfully" });
});

export default router;
