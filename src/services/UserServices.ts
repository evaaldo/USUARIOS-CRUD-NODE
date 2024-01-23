import { sql } from "../database/db"

export class UserServices {

    private idCounter: number = 2

    async getAllUsers() {

        const users = sql`select * from users`

        return users

    }

    async createUser(username: string, password: string) {

        await sql`INSERT INTO users (id, username, password) VALUES (${this.idCounter++}, ${username}, ${password})`

    }

    async updateUser(userId: any, username: string, password: string) {

        await sql`UPDATE users SET username = ${username}, password = ${password} WHERE id = ${userId}`

    }

    async deleteUser(userId: any) {

    }

}