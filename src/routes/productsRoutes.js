import express from "express";
import { GetAllProducts,GetProductById,CreateProduct,DeleteProduct,UpdateProduct } from "../controllers/ProductController.js";



const router = express.Router();

router.get("/",GetAllProducts);
router.get("/:id",GetProductById);
router.post("/create",CreateProduct);
router.delete("/delete/:id",DeleteProduct);
router.put("/update/:id",UpdateProduct);


export default router; 