import CommanTypes from "./CommanTypes";

interface IStudentsModelType extends CommanTypes {
    studentId: string;
    studentName: string;
    class: string;
    classId: string;
    studentType: "Regular" | "Private";
}

export default IStudentsModelType;