import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
    const allUsers = await prisma.users.findMany();
    return new Response(JSON.stringify(allUsers))
}



