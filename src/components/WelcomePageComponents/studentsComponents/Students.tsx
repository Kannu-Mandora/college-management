import { AiFillHome } from "react-icons/ai";
import Card from "./Card";
import DrawerUI from "@/components/WelcomePageComponents/studentsComponents/StudentDrawerPanel";
export default function StudentPage({
  studentName,
  userImageLink,
}: {
  studentName: string;
  userImageLink?: string;
}) {
  return (
    <>
      <div className="flex justify-between gap-2 items-center bg-gray-100 px-5 py-1 sticky top-16">
        <span className="text-sm">
          Welcome!{" "}
          <span className="bg-opacity-10 rounded px-[6px] py-[1.5px] border-b-[2px] border-opacity-600 bg-blue-400 border-blue-400 text-blue-400">
            {studentName.split(" ")[0]}
          </span>
        </span>
        <div className="flex items-center gap-3">
          Dashboard{" "}
          <AiFillHome className="text-white bg-blue-400 text-4xl p-2 rounded" />{" "}
          <DrawerUI userImageLink={userImageLink} />
        </div>
      </div>
      <Card />
    </>
  );
}
