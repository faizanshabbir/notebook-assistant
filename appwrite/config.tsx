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
    async createUserAccount({ email, password }: CreateUserAccount) {
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

    async login({ email, password }: LoginUserAccount) {
        try {
            return await account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw (error)
        }
    }

    async isLoggedIn() {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) {

        }
    }

    async getCurrentUser() {
        try {
            return account.get()
        } catch (error) {
            console.log("getcurrentUser error" + error)
        }
    }

    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("logout error " + error)
        }
    }
}

const appwriteService = new AppwriteService()

export default appwriteService