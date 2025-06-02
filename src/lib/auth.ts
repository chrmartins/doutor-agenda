import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
    provider: "pg", // postgres
    usePlural: true
  }), 
  user: {
    modelName: "userTable"
  },
  session: {
    modelName: "sessionTable"
  },
  account: {
    modelName: "accountTable"
  },
  verification: {
    modelName: "verificationTable"
  }
})