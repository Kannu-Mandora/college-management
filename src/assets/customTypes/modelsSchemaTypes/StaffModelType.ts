import CommanTypes from "./CommanTypes";

interface IStaffModelType extends CommanTypes {
    staffId: string;
    staffName: string;
    staffType: "Teaching" | "Non-Teaching";
    departmentId: string;
    salary: Number;
    subject: string;
}

export default IStaffModelType;