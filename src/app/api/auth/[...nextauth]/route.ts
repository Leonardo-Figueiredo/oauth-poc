import NextAuth from "next-auth"

import type { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from '@/app/hooks/auth.hook'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.query?.nextauth?.includes("callback") && req.method === "POST") {
    // console.log(
    //   "Handling callback request from my Identity Provider",
    //   req.body
    // )
  }

  // Get a custom cookie value from the request
  const someCookie = req.cookies["some-custom-cookie"]

  const nextAuth = await NextAuth(req, res, authOptions)

  return nextAuth
}

export { handler as GET, handler as POST }


