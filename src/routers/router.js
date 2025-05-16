import newUsers from "../controller/user.controller.js";
import { Router } from "express";

let router = Router()

router.get("/api/users",newUsers.GetAllUser)
router.post("/api/user",newUsers.PostUser)
router.put("/api/user/:id",newUsers.PutUser)
router.delete("/api/user/:id",newUsers.DeleteUser)



export default router