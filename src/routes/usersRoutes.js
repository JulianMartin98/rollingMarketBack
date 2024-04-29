import express from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser, LoginUser } from "../controllers/userController.js";
import comprobarJWT from "../middlewares/verifyJWT.js";


const router = express.Router();

router.get("/",comprobarJWT,GetAllUsers);
router.get("/:id",comprobarJWT,GetUserById);
router.post("/create",comprobarJWT,CreateUser);
router.delete("/delete/:id",comprobarJWT,DeleteUser);
router.put("/update/:id",comprobarJWT,UpdateUser);
router.post("/login",LoginUser);



export default router; 