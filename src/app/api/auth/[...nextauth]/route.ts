import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Password",
      credentials: {
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 環境変数で設定したパスワードと比較
        const isValid = credentials?.password === process.env.SITE_PASSWORD

        if (isValid) {
          // ダミーユーザーを返す
          return { id: "1", name: "Visitor" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
})

export { handler as GET, handler as POST } 