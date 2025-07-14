import express  from 'express';
import { getCustomersInFrance } from '../controllers/customersController.js';




const router = express.Router();

router.get('/france',getCustomersInFrance);

export default router
