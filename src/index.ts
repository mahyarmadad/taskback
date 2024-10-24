import express, { Request, Response } from "express";

const app = express();
const PORT: string = process.env.port || "5500";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
