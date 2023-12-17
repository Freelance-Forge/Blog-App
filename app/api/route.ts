import { PrismaClient } from '@prisma/client'
import {NextResponse} from "next/server";

const prismaClient = new PrismaClient()

export const GET = async () => {
    const allUsers = await prismaClient.user.findMany()
    console.log(allUsers);

    return NextResponse.json(
        {
            msg: "hello",
        }
    );
}

