import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";  //Se matricula la ruta usuarios

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);  //Para el tratamiento de mensajes entre BD y servicios web se crea la tabla en la BD


app.listen(5000, ()=> console.log('Server up and running...'));