import { PrismaClient } from '@prisma/client'
import {NextResponse} from "next/server";

const prismaClient = new PrismaClient()

export const GET = async () => {
<<<<<<< HEAD
    const session = await getServerSession();
=======
    const allUsers = await prismaClient.user.findMany()
    console.log(allUsers);
>>>>>>> 98dd6c274f76343376f8777749f8050f541af822

    return NextResponse.json(
        {
            msg: "hello",
            session
        }
    );
}

