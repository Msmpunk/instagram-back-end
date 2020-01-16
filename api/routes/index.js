import { Router } from 'express'
import { getHome } from '../controllers/app'
import { createUser, getUsers, updateUser } from '../controllers/users'
import {
    createPublishment,
    getPublishments,
    getAllPublishmentsByUser
} from '../controllers/publishment'

import { createComment } from '../controllers/comments'
const router = Router();

// RUTA DEFAULT
router.get('/', getHome);

// RUTAS DE USUARIO
router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.put('/updateUser/:userId', updateUser);

// RUTAS DE PUBLICACION
router.post('/createPublishment', createPublishment);
router.get('/getPublishments', getPublishments)
router.get('/getAllPublishmentsByUser/:userId', getAllPublishmentsByUser)

//CRUD comment
router.post('/createComment', createComment);
export default router;
