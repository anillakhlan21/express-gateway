import express,{Request,Response} from 'express';
import axios from 'axios';
const router = express.Router();


router.all("/:apiName",(req:Request,res:Response)=>{
    console.log(req.params.apiName);
    res.send(req.params.apiName+'\n');
})


export {router as routes};