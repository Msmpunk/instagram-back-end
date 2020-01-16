import { Router } from 'express'
import { getHome } from '../controllers/app'
import { createUser } from '../controllers/users'

const router = Router();

// RUTA DEFAULT
router.get('/', getHome);

// RUTAS DE USUARIO
router.post('/createUser', createUser)

export default router;
