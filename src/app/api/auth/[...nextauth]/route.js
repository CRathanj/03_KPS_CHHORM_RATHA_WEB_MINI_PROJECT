import { loginService } from "@/service/auth/login.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(userInfo) {
                const userData = {
                    email: userInfo?.email,
                    password: userInfo?.password,
                };
                const login = await loginService(userData)
                return login;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", 
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };