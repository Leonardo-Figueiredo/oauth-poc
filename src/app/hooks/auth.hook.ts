import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { getServerSession } from "next-auth"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    })
  ],
  callbacks: {
    async signIn(params) {
      // console.log("SignIn", { params })
      return true
    },
    async redirect({ url, baseUrl, ...params }) {
      // console.log('redirect', { url, baseUrl, params})

      return baseUrl
    },
    session({ session, token }) {
      // Return a cookie value as part of the session
      // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
      // session.someCookie = someCookie

      // console.log('SESSION ROUT', { session, token })
      return { ...session }
    }
  },
  events: {
    signOut(message) {
      // console.log('signout', { message })
    }
  },
  secret: process.env.GITHUB_SECRET!,
} satisfies NextAuthOptions

// Use it in server contexts
export function getServerAuth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}
