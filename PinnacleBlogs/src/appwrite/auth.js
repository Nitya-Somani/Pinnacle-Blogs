import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client ;
  account;

  constructor() {
    this.client = new Client()
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
}


  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
     
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailSession(email, password);
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
