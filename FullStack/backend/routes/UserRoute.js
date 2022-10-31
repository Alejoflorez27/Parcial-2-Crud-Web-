//Este archivo se usa para manejar el enrutamiento
import express from "express";

//Si no se llaman iual que los metodos del controlador va a generar error
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,

} from "../controllers/UserController.js"; //Se importa el controlador de usuarios y peticion

const router = express.Router();

//Los endpoints es /users
router.get('/users', getUsers);

//Los endpoints es /users/:id esta a la espera del id
router.get('/users/:id', getUserById);

//Los endpoints es /users esta a la espera del id
router.post('/users', createUser);

//Los endpoints es /users/:id esta a la espera del id para actulizar
router.patch('/users/:id', updateUser);

//Los endpoints es /users/:id esta a la espera del id para eliminar
router.delete('/users/:id', deleteUser);

export default router;

