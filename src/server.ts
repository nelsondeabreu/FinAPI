import express from "express";
import { userRouter } from "./routes/user.routes";

const app = express()

app.use(express.json())
app.use("/user", userRouter)


app.listen(2515, ()=> {return console.log("Server Running at the port 2515.")})