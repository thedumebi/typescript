import express, {
  Request,
  Response,
  NextFunction,
  json,
  urlencoded,
} from "express";
import todoRoutes from "./routes/todos";

const app = express();

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));
// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// routing
app.use("/todos", todoRoutes);

// start server
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
