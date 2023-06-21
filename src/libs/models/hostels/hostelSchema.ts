import { Schema, model } from "mongoose";
import IHostelModelType from "@customTypes/modelsSchemaTypes/HostelModelType";

const hostelSchema = new Schema<IHostelModelType>({
  hostelId: {
    type: String,
    required: true,
    unique: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  roomNo: {
    type: String,
    required: true,
  },
  blockNo: {
    type: String,
    required: true,
  },

  hostelType: {
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
  profileImage: {
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

export default model("Hostel", hostelSchema);
