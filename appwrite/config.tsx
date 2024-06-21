import conf from '@/conf/config'
import { Client, Account, ID } from "appwrite"

type CreateUserAccount = {
    email: string;
    password: string;
}

type LoginUserAccount = {
    email: string;
    password: string;
}

const appwriteClient = new Client
appwriteClient.setEndpoint('https://cloud.appwrite.io/v1').setProject(conf.APPWRITE_PROJECT_ID)

export const account = new Account(appwriteClient)

export class AppwriteService {
    // Create a new user account
    async createUserAccount({ email, password }: CreateUserAccount): Promise<void> {
        try {
            const userAccount = await account.create(ID.unique(), email, password)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw (error)
        }
    }

    async login({ email, password }: LoginUserAccount): Promise<void> {
        try {

        } catch (error) 
    }

    async isLoggedIn() {

    }

    asnyc getCurrentUIser() {

    }
}