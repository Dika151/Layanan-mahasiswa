import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import environment from "@/config/environtment";
import { JwtExtended, SessionExtended, UserExtended } from "@/types/sign";
import signServices from "@/services/sign";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ): Promise<UserExtended | null> {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const result = await signServices.login({
          username,
          password,
        });

        const accessToken = result.data.accessToken;

        const profile = await signServices.getProfile(accessToken);
        const user = profile.data;

        if (
          accessToken
          //  &&
          // result.status === 200 &&
          // user._id &&
          // profile.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JwtExtended;
      user: UserExtended | null;
    }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: SessionExtended;
      token: JwtExtended;
    }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },
});
