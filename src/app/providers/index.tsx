'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export const Providers = ({ children, session }: { children: ReactNode, session: Session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
