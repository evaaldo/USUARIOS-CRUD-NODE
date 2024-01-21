import { Router } from "express"

export const router = Router()

router.get('/users')
router.post('/users')
router.put('/users/:id')
router.delete('/users/:id')
