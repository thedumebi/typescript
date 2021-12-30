import { Router } from "express";

const router = Router();

router.route("/").post().get();

router.patch("/:id");

router.delete("/:id");

export default router;
