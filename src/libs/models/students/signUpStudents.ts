import { SignUpStudents } from "@/assets/customTypes/modelsSchemaTypes/allTypes";
import { Schema, models, model } from "mongoose";

const newStudents = new Schema<SignUpStudents>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => {
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
      },
      message: "Invalid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password: string) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
          password
        );
      },
      message: "Invalid password",
    },
  },
  image: {
    type: String,
    default:
      "https://ik.imagekit.io/egkxyv8la/College-Management/icons/avatar.svg?updatedAt=1688274363718",
  },
});

export default models.newStudents || model("newStudents", newStudents);
