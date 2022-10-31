import User from "../models/UserModel.js";      //Importamos el modelo UserModel

//Este metodo me trae los registros de usuarios select * from users
export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.menssage);
    }
}

//Este metodo me trae el registro de usuarios que trae por el id espesificado 
export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.menssage);
    }
}

//Este metodo que manda un objeto usuario json y lo almacena en la BD
export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.menssage);
    }
}

//Este es el metodo que va actualizar el usuario en la base de datos
export const updateUser = async(req, res) =>{
    try {
        //Le va a indicar a cual va a ser el usuario que va a actualizar
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Update"});
    } catch (error) {
        console.log(error.menssage);
    }
}

//Este es el metodo que va actualizar el usuario en la base de datos
export const deleteUser = async(req, res) =>{
    try {
        //Le va a indicar a cual va a ser el usuario que va a actualizar
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.menssage);
    }
}
