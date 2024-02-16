'use client'

// import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home () {
  const { push } = useRouter()
  // const { session } = useSession()

  useEffect(() => {
    // console.log({session})
    // async function signIn() {
    //   const data = await fetch('http://localhost:3000/api/auth/signin')
    //   console.log('Authenticate Test', { data })
    // }

    // signIn()
  }, [])

  const handleAuthButton = () => {
    push('/api/auth/signin')
  }
  const handleSignOutButton = () => {
    push('/api/auth/signout')
  }

  return (
    <main className="flex min-h-5 bg-slate-200 flex-col items-center justify-between p-24">
      <h1 className="mb-5 text-xl">Github OAuth Test</h1>

      <div className='flex w-80 justify-around mt-12'>
        <button
          className="border bg-white border-gray-950 p-3 rounded-xl"
          onClick={handleAuthButton}
        >
          Authenticate
        </button>

        <button
          className="border bg-white border-gray-950 p-3 rounded-xl"
          onClick={handleSignOutButton}
        >
          Sign Out
        </button>
        <button
          className="border bg-white border-gray-950 p-3 rounded-xl"
          onClick={() => push('/api/auth/error')}
        >
          Error
        </button>
      </div>
    </main>
  )
}
