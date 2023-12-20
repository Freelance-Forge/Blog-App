import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth';
import {NextResponse} from "next/server";

const prismaClient = new PrismaClient()

export const GET = async () => {
    const session = await getServerSession();

    return NextResponse.json(
        {
            msg: "hello",
            session
        }
    );
}

