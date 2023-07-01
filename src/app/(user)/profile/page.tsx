import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDatabase } from "@database/connection";
import studentSchema from "@models/students/studentSchema";
import { cache } from "react";
import Image from "next/image";

export default async function UserProfile() {
  const session = await getServerSession(authOptions);
  const { email, name, image } = session?.user!;
  // fetched data will cached by react cache method
  const getUser = cache(async () => {
    await connectDatabase();
    const student = await studentSchema.findOne({ email });
    return student;
  });
  const student = await getUser();
  const {
    studentType,
    contactNumber,
    address,
    city,
    state,
    motherName,
    fatherName,
    dateOfBirth,
    studentId,
    classId,
  } = student;

  const parentClassName = "flex flex-col gap-2";
  const childrenClassName =
    "bg-gray-300 rounded-sm px-2 py-3 opacity-50  border-b-4 border-[--secondary]";
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-10 py-5">
        <Image
          src={image!}
          alt="user image"
          width={100}
          height={100}
          className="rounded-full max-sm:w-20 max-sm:h-20 pointer-events-none"
        />
        <section className="flex flex-col justify-center -z-40">
          <span>{name}</span>
          <aside className="flex items-center gap-3 opacity-50">
            <span>Class: {student.class}</span>
            <span>ClassID: {classId}</span>
          </aside>
          <span className="opacity-50 underline underline-offset-1">
            {email}
          </span>
        </section>
      </div>
      <div className="flex flex-col gap-2 w-10/12 mx-auto py-10">
        <section className="flex flex-col gap-6 -z-40">
          <div className={parentClassName}>
            <span>Student ID</span>
            <span className={childrenClassName}>{studentId}</span>
          </div>
          <div className={parentClassName}>
            <span>Student Type</span>
            <span className={childrenClassName}>{studentType}</span>
          </div>
          <div className={parentClassName}>
            <span>Mother Name</span>
            <span className={childrenClassName}>{motherName}</span>
          </div>
          <div className={parentClassName}>
            <span>Father Name</span>
            <span className={childrenClassName}>{fatherName}</span>
          </div>
          <div className={parentClassName}>
            <span>Date of birth</span>
            <span className={childrenClassName}>{dateOfBirth}</span>
          </div>
          <div className={parentClassName}>
            <span>Contact Number</span>
            <span className={childrenClassName}>{contactNumber}</span>
          </div>
          <div className={parentClassName}>
            <span>Address</span>
            <span className={childrenClassName}>
              {address}, {city}, {state}
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
