import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
// }

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

import type { NextApiRequest, NextApiResponse } from "next"

async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.query?.nextauth?.includes("callback") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      req.body
    )
  }

  // Get a custom cookie value from the request
  const someCookie = req.cookies["some-custom-cookie"]

  const nextAuth = await NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      })
    ],
    callbacks: {
      async signIn(params) {
        console.log("SignIn", {params})
        return true
      },
      async redirect({ url, baseUrl, ...params }) {
        console.log(url, { params})

        return baseUrl
      },
      session({ session, token }) {
        // Return a cookie value as part of the session
        // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
        // session.someCookie = someCookie

        console.log({session})
        return session
      }
    },
    events: {
      signOut(message) {
        console.log('signout', { message })
      }
    },
    secret: process.env.GITHUB_SECRET!,
  })

  return nextAuth
}

export { handler as GET, handler as POST }


