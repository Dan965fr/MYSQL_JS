import { config } from "dotenv";
import express from "express";
import customersRoutes from './routes/customersRoutes.js';
import employeesRoutes from './routes/employeesRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
config();


const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());

app.use('/customers', customersRoutes);

app.use('/employees',employeesRoutes);

app.use('/products',productsRoutes);




app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})