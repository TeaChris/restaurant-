'use client'

import Link from 'next/link'
import { FC } from 'react'
import { signOut, useSession } from 'next-auth/react'

interface UserLinksProps {}

const UserLinks: FC<UserLinksProps> = ({}) => {
  const { status } = useSession()

  return (
    <div>
      {status === 'authenticated' ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  )
}

export default UserLinks
