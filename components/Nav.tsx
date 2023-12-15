import { config } from "@/auth"
import { getServerSession } from "next-auth/next"
import Link from "next/link"

export default async function Nav() {
    const session = await getServerSession(config)

    return (
        <nav className='flex-between w-full mb-10'>
            <Link href='/' className='flex gap-2 flex-center'>
                <p className='max-sm:hidden font-satoshi font-semibold text-2xl text-black tracking-wide mt-5 ml-10'>BlogApp</p>
            </Link>

            <ul className="flex justify-end mr-20 text-2xl font-bold">
                <li className="mr-10"><Link href="/">Home</Link></li>
                {session?.user ? (
                    <ul className="flex ">
                        <li className="mr-10"><Link href="/profile">Profile</Link></li>
                        <li className="mr-10"><Link href="/api/auth/signout">Sign Out</Link></li>
                    </ul>
                ) : (
                    <li className="mr-10"><Link href="/api/auth/signin">Sign In</Link></li>
                )}
            </ul>
        </nav>
    )
}