import express from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/userController.js";



const router = express.Router();

router.get("/",GetAllUsers);
router.get("/:id",GetUserById);
router.post("/create",CreateUser);
router.delete("/delete/:id",DeleteUser);
router.put("/update/:id",UpdateUser);
router.post("/login",LoginUser);



export default router; 