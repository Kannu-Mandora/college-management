import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import studentSchema from "@models/students/studentSchema";
import studentModelType from "@customTypes/modelsSchemaTypes/studentsModelType";
import { connectDatabase } from "@database/connection";
import { compareSync } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialProvider({
      name: "Sign In",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<any> {
        if (!credentials) return null;
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectDatabase();
        const user = await studentSchema.findOne({ email });
        if (!user) return false;
        else {
          const isMatched = compareSync(password, user?.password);
          if (!isMatched) return false;
          else {
            const { email, studentName, profileImage } = user;
            return { email, name: studentName, image: profileImage };
          }
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }): Promise<boolean> {
      await connectDatabase();
      const existingUser = await studentSchema.findOne<studentModelType>({
        email: user?.email,
      });
      if (!existingUser) return false;
      return true;
    },
  },
  jwt: { maxAge: 60 * 60 * 24 * 30 },
  pages: {
    error: "/login", // Error code passed in query string as ?error=
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
