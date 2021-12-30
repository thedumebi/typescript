import { Router } from "express";
import { createTodo } from "../controllers/todos";

const router = Router();

router.route("/").post(createTodo).get();

router.patch("/:id");

router.delete("/:id");

export default router;
