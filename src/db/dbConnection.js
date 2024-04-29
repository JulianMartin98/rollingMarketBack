import mongoose from "mongoose";
import { CONNECTION_STRING } from "../config/config.js";


mongoose.connect(CONNECTION_STRING);


mongoose.connection.on("connected", () => {
    console.log("Conectado a la base de datos de MongoDB")

})

mongoose.connection.on("error", (error) => {
    console.error("Error de conexión a MongoDB: ", error)
})