import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // generate password...
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync("test", salt);
        // console.log("hash", hash);

        // Add logic here to look up the user from the credentials supplied

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const valid = bcrypt.compareSync(credentials.password, user.password);

        if (!valid) {
          throw new Error("Wrong credentials. Try again.");
        }

        if (valid) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = token;

      return session;
    },
  },
};
export default NextAuth(authOptions);
