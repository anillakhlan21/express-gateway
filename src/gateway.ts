import express from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { routes} from "./routes/index";
const app = express();
const port : number = process.env.GATEWAY_PORT ? parseInt(process.env.GATEWAY_PORT,10) : 5000;

app.use(express.json());
app.use("/",routes);
console.log(process.env);

app.listen(port, () => {
  
  console.log(
    `app instance is created successfully and running on port no. ${port}`
  );
});
