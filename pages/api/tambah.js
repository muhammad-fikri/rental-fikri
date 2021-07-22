import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const {kendaraan, nama, email, nomer, alamat, tanggal} = req.body;
    try{
        if(!kendaraan || !nama || !email || !nomer || !alamat|| !tanggal){
            return res.status(400).json({message: 'Input harus diisi semua'})
        }
        const result = await db.query(`INSERT INTO rental (kendaraan, nama, email, nomer, alamat, tanggal) VALUES (?,?,?,?,?,?)`,[kendaraan, nama, email, nomer, alamat, tanggal])
        await db.end;
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler