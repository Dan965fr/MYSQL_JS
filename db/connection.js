import mysql from 'mysql2/promise';
import {config} from 'dotenv';
config();




export const pool = mysql.createPool({
    host: process.env.DB_HOST ||  'localhost',
    user: process.env.DB_USER || 'root',
    password: '',
    database: process.env.DB_NAME || 'classicmodels',
});

