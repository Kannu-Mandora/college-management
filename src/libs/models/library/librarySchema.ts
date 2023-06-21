import { Schema, model } from "mongoose";
import ILibraryModelType from "@customTypes/modelsSchemaTypes/LibraryModelType";

const librarySchema = new Schema<ILibraryModelType>({
  libraryId: {
    type: String,
    required: true,
    unique: true,
  },
  bookSection: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  totalBooks: {
    type: Number,
    required: true,
  },
  finePerDay: {
    type: Number,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  issuedDate: {
    type: Date,
    required: true,
  },
  issuedBy: {
    type: String,
    required: true,
  },
  issuedTo: {
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

export default model("Library", librarySchema);
