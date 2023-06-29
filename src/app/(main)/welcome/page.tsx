import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Students from "@components/WelcomePageComponents/studentsComponents/Students";
import { getServerSession } from "next-auth";
import UnauthorizedError from "@components/UnauthorizedError";
export default async function WelcomePage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {!session ? <UnauthorizedError /> : <Students studentName={session?.user?.name!} />}
    </>
  );
}
