import { Router } from 'express'
import { getHome } from '../controllers/app'
import { createUser, getUsers, updateUser,getUser } from '../controllers/users'
import {
    createPublishment,
    getPublishments,
    getAllPublishmentsByUser
} from '../controllers/publishment'
import { authToken, refreshToken } from '../middlewares/auth-token'
import { createComment } from '../controllers/comments'
import { login } from '../controllers/login'
const router = Router();

// RUTA DEFAULT
router.get('/', getHome);

// RUTAS DE USUARIO
router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.get('/getUser/:userId', getUser);
router.put('/updateUser/:userId', updateUser);

// RUTAS DE PUBLICACION
router.post('/createPublishment', createPublishment);
router.get('/getPublishments', getPublishments)
router.get('/getAllPublishmentsByUser/:userId', getAllPublishmentsByUser)

//CRUD comment
router.post('/createComment', createComment);

// LOGIN
router.post('/login', login)
export default router;
