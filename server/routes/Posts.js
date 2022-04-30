import express from "express";
import { getPosts, makePosts } from "../controllers/Posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/post", makePosts);

export default router;
