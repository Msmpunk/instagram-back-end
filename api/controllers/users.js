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