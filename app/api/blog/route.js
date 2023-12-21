import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { config } from '@/auth';

const prismaClient = new PrismaClient();

export async function GET() {
    const blogs = await prismaClient.blog.findMany();

    return NextResponse.json(blogs);
}

export async function POST(request) {
    const session = await getServerSession(config);

    if (!session) {
        return NextResponse.json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }

    const body = await request.json();

    const blog = await prismaClient.blog.create({
        data: {
            title: body.title,
            filename: body.content,
            author: session?.user?.id,
        }
    })

    return NextResponse.json(blog);
}