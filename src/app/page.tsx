'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useIUGU } from './hooks/iugu.hook'

export default function Home () {
  const { push } = useRouter()
  const { status } = useSession()
  const IUGU = useIUGU()

  useEffect(() => {
    if (status === 'authenticated') push('/checkout')

    console.log('IUGU', { cc: IUGU.utils.getBrandByCreditCardNumber("4111111111111111") })
  }, [status])

  const handleAuthButton = () => {
    push('/api/auth/signin')
  }
  const handleSignOutButton = () => {
    push('/api/auth/signout')
  }

  return (
    <main className="flex min-h-5 min-w-full bg-slate-200 flex-col items-center justify-between p-24">
      <h1 className="mb-5 text-xl">Github OAuth Test</h1>
      <span>Session state: {status}</span>

      <div className='flex w-6/12 flex-wrap justify-around mt-10'>
        <button
          className="border bg-white m-2 border-gray-950 p-3 rounded-xl"
          onClick={handleAuthButton}
        >
          Sign In
        </button>

        <button
          className="border bg-white m-2 border-gray-950 p-3 rounded-xl"
          onClick={handleSignOutButton}
        >
          Sign Out
        </button>
        <button
          className="border bg-white m-2 border-gray-950 p-3 rounded-xl"
          onClick={() => push('/api/auth/verify-request')}
        >
          Verify Request
        </button>
        <button
          className="border bg-white m-2 border-gray-950 p-3 rounded-xl"
          onClick={() => push('/api/auth/new-user')}
        >
          New User
        </button>
        <button
          className="border bg-white m-2 border-gray-950 p-3 rounded-xl"
          onClick={() => push('/api/auth/error')}
        >
          Error
        </button>
      </div>
    </main>
  )
}
