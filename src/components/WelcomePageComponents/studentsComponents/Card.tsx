import { AiOutlineRise } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiVipDiamondFill } from "react-icons/ri";

export default function Card() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap px-4 my-5 gap-5 text-white">
        <div className="flex flex-col w-96 h-48 p-3 bg-pink-400 rounded">
          <article className="flex justify-between items-start">
            <span>College</span>
            <AiOutlineRise />
          </article>
          <div>
            <span>Attendance:</span>
          </div>
        </div>
        <div className="flex justify-between p-3 items-start w-96 h-48 bg-blue-400 rounded">
          <span>Hostel</span>
          <BsFillBookmarkFill />
        </div>
        <div className="flex justify-between p-3 items-start w-96 h-48 bg-teal-300 rounded">
          <span>Library</span>
          <RiVipDiamondFill />
        </div>
      </div>
    </>
  );
}
