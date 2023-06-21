import { Schema, model } from "mongoose";
import IStudentsModelType from "@customTypes/modelsSchemaTypes/studentsModelType";

const studentSchema = new Schema<IStudentsModelType>({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  classId: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  studentType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
});

export default model("Student", studentSchema);
