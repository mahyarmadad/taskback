import express, { Request, Response } from "express";
import todoRoutes from "./routes/todos";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT: string = process.env.port || "5500";
app.use(
  cors({
    origin: "http://localhost:5501",
    methods: "GET,,PUT,POST,DELETE",
  })
);

app.use(express.json());
app.use("/api/todos", todoRoutes);

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("nothing here!");
});

mongoose
  .connect(process.env.mongoURL || "mongodb://localhost:27017/todo")
  .then(() => {
    console.log(`Database Connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((e) => console.error(e.message));
