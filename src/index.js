import express from 'express';
import { PORT } from './config/config.js';
import morgan from 'morgan';
import cors from 'cors';
import "./db/dbConnection.js";
import usersRoutes from './routes/usersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';


const app = express()

app.use(express.json());
app.use(morgan("dev"))
app.use(cors()) 


app.use("/api/user", usersRoutes);
app.use("/api/product", productsRoutes);




app.listen(PORT, async () => {
  console.log(`La app está escuchando en el puerto ${PORT}`);
});