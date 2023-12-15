import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { options } from './api/auth/[...nextauth]/options'
import UserCard from '@/components/UserCard'

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You are not signed in!</h1>
      )}
    </>
  )
}
