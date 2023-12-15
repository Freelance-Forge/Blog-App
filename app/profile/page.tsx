import { getServerSession } from 'next-auth'
import { config } from '@/auth'
import UserCard from '@/components/UserCard'

export default async function Profile() {
  const session = await getServerSession(config)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Profile"} />
      ) : (
        <h1 className="text-5xl">You are not signed in!</h1>
      )}
    </>
  )
}
