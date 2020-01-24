import { compareSync } from 'bcryptjs'
import { sign } from 'jsonwebtoken';

import { User } from '../models/user'
import { SEED } from '../config/config'

export async function refreshToken(req, res) {
 
    const token = jwt.sign({ user: req.user }, SEED, { expiresIn: 14400 }); // 4 horas
  
    res.status(200).json({
        ok: true,
        token: token
    });
  
};

export async function login(req, res){
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email: email})

        if(!user){
            return res.status(400).json({
                ok: false,
                message: 'Correo Invalido'
            })
        }

        if(!compareSync(password, user.password)){
            return res.status(400).json({
                ok: false,
                message: 'Contraseña Invalida'
            })
        }
        user.password = ':)';

        const token = sign({ user: user }, SEED, { expiresIn:14400 })

        return res.status(200).json({
            ok: true,
            user: user,
            token: token,
            id: user._id
        })
    } catch (error) {
        return res.status(500).json({error: 'There is a problem in the server'});
    }

}
