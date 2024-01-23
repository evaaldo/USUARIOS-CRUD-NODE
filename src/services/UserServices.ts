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

    async updateUser(userId: any, name: string, password: string) {

    }

    async deleteUser(userId: any) {

    }

}