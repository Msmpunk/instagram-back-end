import { User } from '../models/user'
import bcrypt from 'bcryptjs'

export function createUser(req, res) {
    try {
        const { name, user_name, email, password } = req.body
        
        const newUser = new User({
            user_name: user_name,
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 10)
        })
        newUser.save((err, userSave) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al crear Usuario',
                    errors: err
                })            
            } else {
               res.status(201).json({
                   ok: true,
                   user: userSave
               }) 
            }
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Hay problemas en nuestro servidor'
        })
    }
}

export async function getUsers(req, res){
    try {

        const users = await User.find({})

        if(!users){
           return res.status(400).json({
               ok: false,
               message: 'No se encontraron usuarios'
           }) 
        }

        return res.status(200).json({
            ok: true,
            users: users,
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Hay error en el servidor',
            ok: false
        })
        
    }
}

export async function updateUser(req, res){
    try {
        const { userId } = req.params
        const {
            name,
            email,
            user_name,
            description
        } = req.body

        const user = await User.findById(userId)

        user.name = name
        user.email = email
        user.user_name = user_name
        user.description = description

        const userUpdated = await user.save();
        if(!userUpdated){
            return res.status(400).json({
                ok: false,
                message: 'El usuario no pudo ser guardado'
            }) 
        }
        return res.status(200).json({
            ok: true,
            userUpdated: userUpdated,
        });


    } catch (error) {
        return res.status(500).json({
            error: 'Hay error en el servidor',
            ok: false
        })
        
    }
}
    
export async function getUser(req, res){
    try {
        const { userId } = req.params

        const user = await User.findById(userId)

        if(!user){
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            }) 
        }

        user.password = ':)'

        return res.status(200).json({
            ok: true,
            user: user,
        });


    } catch (error) {
        return res.status(500).json({
            error: 'Hay error en el servidor',
            ok: false
        })
        
    }
}
    
