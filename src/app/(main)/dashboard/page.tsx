import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Students from "@components/dashboard/studentsComponents/Students";
import { getServerSession } from "next-auth";
import UnauthorizedError from "@components/UnauthorizedError";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {!session ? (
        <UnauthorizedError />
      ) : (
        <Students studentName={session?.user?.name!} />
      )}
    </>
  );
}
