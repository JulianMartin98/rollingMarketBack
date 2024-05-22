import express from "express";
import { GetAllProducts, CreateProduct, DeleteProduct, UpdateProduct, GetProductbyCategory } from "../controllers/ProductController.js";



const router = express.Router();

router.get("/",GetAllProducts);
router.post("/create",CreateProduct);
router.delete("/delete/:id",DeleteProduct);
router.put("/update/:id",UpdateProduct);
router.get("/category/:category",GetProductbyCategory);


export default router; 