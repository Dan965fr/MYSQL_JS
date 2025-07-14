import express from 'express';
import {getProductInClassicCar} from '../controllers/productsController.js';

const router = express.Router();

router.get('/Classic-Cars',getProductInClassicCar);

export default router;