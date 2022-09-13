import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)