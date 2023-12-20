import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { config } from '@/auth';

const prismaClient = new PrismaClient();

export async function GET(request: Request, {params}: { params: { id: string } }) {

    const user = await prismaClient.user.findUnique({ where: { id: params.id } }).catch();
    console.log(user)

    return NextResponse.json(
        user
    )
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    const session = await getServerSession(config);
    const userId = params.id

    if(!session) {
        return NextResponse.json(
            {
                error: "Unauthorized"
            },
            {
                status: 401
            }
        )
    }

    if(session?.user?.id !== userId) {
        return NextResponse.json(
            {
                error: "Unauthorized"
            },
            {
                status: 401
            }
        )
    }

    const body = await request.json();

    const user = await prismaClient.user.update({
        where: { id: params.id },
        data: {
                name: body.name,
                image: body.image,
                age: body.age,
            }
    }).catch();

    return NextResponse.json(
        user
    )
}

// Delete User Route
export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const session = await getServerSession(config);
    const userId = params.id

    if(!session) {
        return NextResponse.json(
            {
                error: "Unauthorized"
            },
            {
                status: 401
            }
        )
    }

    if(session?.user?.id !== userId) {
        return NextResponse.json(
            {
                error: "Unauthorized"
            },
            {
                status: 401
            }
        )
    }

    const user = await prismaClient.user.delete({
        where: { id: params.id },
    })

    return NextResponse.json(
        user
    )
}