import {pool} from '../db/connection.js';


export async function getEmployeeReportTo1143(req,res){
    try{
        const employee = await pool.query(
            "SELECT firstName,lastName FROM `employees` WHERE reportsTo = ?",
            [1143]
        );
        res.json(employee);

    }catch(error){
        res.status(500).json({error:"DB error"})
    }
}