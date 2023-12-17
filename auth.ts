import NextAuth, {DefaultSession, NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import {PrismaClient} from '@prisma/client'
import {PrismaAdapter} from "@auth/prisma-adapter"

const prisma = new PrismaClient();

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

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
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({session, user}) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    }
}

export const {handlers, auth, signIn, signOut} = NextAuth(config)

