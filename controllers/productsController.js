import {pool} from '../db/connection.js';


export async function getProductInClassicCar(req,res){
    try{
        const [rows] = await pool.query(
            "SELECT COUNT(*) AS productCount FROM `products` WHERE productLine = ? ",
            ["Classic Cars"]
        );
        res.json({productCount: rows[0].productCount});
    }catch(error){
        res.status(500).json({error:"DB error"});
    }
}