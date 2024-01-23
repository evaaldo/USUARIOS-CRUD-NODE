import { Request, Response } from "express"
import { UserServices } from "../services/UserServices"

const userServices = new UserServices()

export class UserController {

    async getAllUsers( request: Request, response: Response ) {

        const users = await userServices.getAllUsers()

        return response.status(200).json(users)

    }

    async createUser( request: Request, response: Response ) {

        const user = request.body

        console.log(user)

        await userServices.createUser(user.username, user.password)

        return response.status(200).json({ mesage: "User created!" })

    }

    async updateUser( request: Request, response: Response ) {

        const userId = request.params.id

        const user = request.body

        await userServices.updateUser(userId, user.username, user.password)

        return response.status(200).json({ message: "User updated!" })

    }

    async deleteUser( request: Request, response: Response ) {

        const userId = request.params.id

        await userServices.deleteUser(userId)

        return response.status(200).json({ message: "User deleted!" })

    }

}