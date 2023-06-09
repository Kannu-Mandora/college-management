import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import studentSchema from "@models/students/studentSchema";
import studentModelType from "@customTypes/modelsSchemaTypes/studentsModelType";
import { connectDatabase } from "@database/connection";

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
        const { email } = credentials;
        await connectDatabase();
        const user = await studentSchema.find({ email });
        if (!user) return null;
        else {
          const { email, studentName, profileImage } =
            user[0] as studentModelType;
          return { email, name: studentName, image: profileImage };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {
      await connectDatabase();
      const existingUser = await studentSchema.find<studentModelType>({
        email: user?.email,
      });
      if (existingUser.length === 0) return false;
      else return true;
    },
    redirect({ url, baseUrl }) {
      return Promise.resolve(url); // This is will redirect to the url provided. If user signed in successfully, then it will redirect to /dashboard. If user signout then, it will redirect to "/"
    },
  },
  jwt: { maxAge: 60 * 60 * 24 * 30 },
  pages: {
    error: "/login", // Error code passed in query string as ?error=
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
