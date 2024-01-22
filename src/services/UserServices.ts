import { sql } from "../database/db"

export class UserServices {

    private idCounter: number = 1

    async getAllUsers() {

        const users = sql`SELECT * FROM users`

        return users

    }

    async createUser(name: string, password: string) {

        const user = {
            id: this.idCounter++,
            name,
            password
        }

    }

    async updateUser(userId: any, name: string, password: string) {

    }

    async deleteUser(userId: any) {

    }

}