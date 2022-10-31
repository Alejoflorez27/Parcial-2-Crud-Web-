//Este modelo tiene una estructura de tabla como la tabla BD
import { Sequelize } from "sequelize";      //Se importa la secuela
import bd from "../config/Database.js";     //Se importa la BD

const {DataTypes} = Sequelize;              //Convierte los tipos de datos aqui(Secuela)

//Se le da el nombre en plural en la tabla de la BD y los combres de los campos
const User = bd.define('users',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    gender:DataTypes.STRING
},{
    freezeTableName:true
});            

export default User;     //Si encuentra una tabla igual en la base de datos

//La funcion asincronica devuelve un objeto 
(async()=>{
    await bd.sync()
})();