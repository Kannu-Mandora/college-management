import {
  studentModelType,
  SignUpStudents,
} from "@customTypes/modelsSchemaTypes/allTypes";
import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@database/connection";
import studentSchema from "@models/students/studentSchema";
import { hash } from "bcryptjs";
import signUpStudents from "@models/students/signUpStudents";

const headers = {
  "content-type": "application/json",
};

export async function POST(request: NextRequest, response: NextResponse) {
  const { email, password } = await request.json();
  await connectDatabase();
  const [user, newUser] = await Promise.all([
    studentSchema.findOne<studentModelType>({ email }),
    signUpStudents.findOne<SignUpStudents>({ email }),
  ]);
  if ((user && user.email === email) || (newUser && newUser.email === email)) {
    return new NextResponse(
      JSON.stringify({ message: "User already exists" }),
      { headers, status: 409 }
    );
  } else {
    const hashPassword = await hash(password, 10);
    const newUser = await signUpStudents.create<SignUpStudents>({
      email,
      password: hashPassword,
    });
    return new NextResponse(
      JSON.stringify({ message: "User created", user: newUser }),
      { headers, status: 201 }
    );
  }
}
