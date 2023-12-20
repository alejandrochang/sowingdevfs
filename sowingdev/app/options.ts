import { connectMongoDB } from "@/lib/mongodb";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export const options: NextAuthOptions = {
  providers: [
    // Add additional providers: Github, Google Providers etc..
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
    ],
    pages: {
      signIn:"/signin"  
    },
  session: {
    strategy: "jwt",
  },
  events: {},
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
