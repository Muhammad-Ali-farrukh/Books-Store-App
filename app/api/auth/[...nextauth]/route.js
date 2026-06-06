import { connectMongodb } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        try {
          await connectMongodb();
          const user = await User.findOne({ email });
          if (!user) return null;
          const passwordMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (!passwordMatch) return null;

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt", // fixed spelling
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
