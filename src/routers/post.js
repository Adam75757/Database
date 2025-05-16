import { Router } from "express";
import newPost from "../service/posts.js";
let router_post = Router();

// Bu yerda GET so'rovi POSTlar ro'yxatini olish uchun ishlaydi
router_post.get("/api/post", newPost.GetAllUser);

// POST so'rovi yangi post yaratish uchun ishlaydi
router_post.post("/api/post", newPost.PostUser);

// PUT so'rovi postni yangilash uchun ishlaydi
router_post.put("/api/post/:id", newPost.PutUser);

// DELETE so'rovi postni o'chirish uchun ishlaydi
router_post.delete("/api/post/:id", newPost.DeleteUser);

export default router_post;
