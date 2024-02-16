import NextAuth from "next-auth"

import type { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from '@/app/hooks/auth.hook'

async function handler(req: Request, res: NextApiResponse) {
  const request: NextApiRequest = req as unknown as NextApiRequest

  if(request.query?.nextauth?.includes("callback") && request.method === "POST") {
    // console.log(
    //   "Handling callback request from my Identity Provider",
    //   request.body
    // )
  }

  // Get a custom cookie value from the request
  const someCookie = request.cookies["some-custom-cookie"]

  const nextAuth = await NextAuth(request, res, authOptions)

  return nextAuth
}

export { handler as GET, handler as POST }


