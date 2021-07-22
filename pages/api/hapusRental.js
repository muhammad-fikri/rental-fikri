import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const { id_rental } = req.query
    try{
        if(!id_rental){
            return res.status(400).json({message: 'Tidak ada id nya'})
        }
        const result = await db.query(`DELETE FROM rental WHERE id_rental = ?`, id_rental)
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler