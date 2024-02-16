import { redirect } from 'next/navigation'
import { getServerAuth } from '../hooks/auth.hook'
import NextLink from 'next/link'

export default async function CheckoutPage() {
  const session = await getServerAuth()
  const handleSignOut = () => redirect('/')

  return (
    <div>
      <h1>Checkout Page</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <NextLink
        href={'/api/auth/signout'}
        className='border bg-white m-2 border-gray-950 p-3 rounded-xl'
      >
        SignOut
      </NextLink>
    </div>
  )
}
