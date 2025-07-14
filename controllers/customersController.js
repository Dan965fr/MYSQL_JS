import {pool} from '../db/connection.js';


export async function getCustomersInFrance(req,res){
    try{
        const [rows] = await pool.query(
            "SELECT COUNT(*) FROM customers WHERE country = ?",
            ["France"]
        );
        res.json(rows);
    }catch(error){
        res.status(500).json({error:"DB error"})
    }
}