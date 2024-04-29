import { ProductModel } from "../models/productModel";


export const GetAllProducts = async (req, res) => {

    try {

        const users = await ProductModel.find();
        res.status(200).json({ users, mensaje: "Producto encontrando" });
    }
    catch (error) {

        res.status(500).json({ message: "Error en el servidor" });

    }
};
