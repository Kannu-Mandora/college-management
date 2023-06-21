import CommanTypes from "./CommanTypes";

interface HostelModelType extends CommanTypes {
  hostelId: string;
  studentId: string;
  studentName: string;
  roomNo: string;
  blockNo: string;
  hostelType: "Girls Hostel" | "Boys Hostel";
}

export default HostelModelType;
