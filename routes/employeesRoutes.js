import express from 'express';
import { getEmployeeReportTo1143 } from '../controllers/employeesController.js';

const router = express.Router()

router.get('/1143',getEmployeeReportTo1143);

export default router;