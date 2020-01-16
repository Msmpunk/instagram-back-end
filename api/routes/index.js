import { Router } from 'express'
import { getHome } from '../controllers/app'
import { createUser, getUsers, updateUser } from '../controllers/users'

const router = Router();

// RUTA DEFAULT
router.get('/', getHome);

// RUTAS DE USUARIO
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.put('/updateUser/:userId', updateUser)

export default router;
