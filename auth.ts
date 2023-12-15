import NextAuth, {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import {PrismaClient} from '@prisma/client'
import {PrismaAdapter} from "@auth/prisma-adapter"

const prisma = new PrismaClient({
    log: ['info', 'warn', 'error','query'],
});

export const config: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = {id: "42", name: "Manan", password: "nextauth"}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    console.log("Manan is authenticated")
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
}

export const {handlers, auth, signIn, signOut} = NextAuth(config)

