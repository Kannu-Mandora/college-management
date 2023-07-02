import { Schema, model, models } from "mongoose";
import ITeachersModelType from "@customTypes/modelsSchemaTypes/StaffModelType";

const staffSchema = new Schema<ITeachersModelType>({
  staffId: {
    type: String,
    required: true,
    unique: true,
  },
  staffName: {
    type: String,
    required: true,
  },
  staffType: {
    type: String,
    required: true,
  },
  departmentId: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  dateOfBirth: {
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
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },
  profileImage: {
    type: String,
    required: true,
  },
});

export default models.Staff || model("Staff", staffSchema);
