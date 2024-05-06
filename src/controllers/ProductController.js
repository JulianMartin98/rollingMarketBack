import { ProductModel } from "../models/productModel.js";


export const GetAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        if (products.length === 0) {
            return res.status(404).json({ message: "No hay productos para mostrar" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};


export const CreateProduct = async (req, res) => {
    try {
        const product = await ProductModel.create({ ...req.body })
        return res.status(201).json({ message: "Producto creado exitosamente" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export async function DeleteProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json("Producto no encontrado");
        }
        return res.status(200).json("Producto eliminado exitosamente");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export async function UpdateProduct(req, res) {
    try {
        const { id } = req.params;
        const { name, description, category, price, stock, image } = req.body;
        const product = await ProductModel.findByIdAndUpdate(id, { name, description, category, price, stock, image });
        if (!product) {
            return res.status(404).json("Producto no encontrado");
        }
        return res.status(200).json("Producto actualizado exitosamente");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export async function GetProductbyCategory(req, res) {
    try {
        const { category } = req.params
        const product = await ProductModel.find({ category })
        if (product.length === 0) {
            return res.status(200).json([]); // Devolver un array vacío en lugar de un mensaje de error 404
        }
        return res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}