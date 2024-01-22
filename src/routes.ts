import { Router } from "express"
import { UserController } from "./controllers/UserController"

export const router = Router()
const userController = new UserController()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
