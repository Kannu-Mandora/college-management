import CommanTypes from "./CommanTypes";

interface LibraryModelType extends CommanTypes {
  libraryId: string;
  bookSection: string;
  bookId: string;
  bookName: string;
  totalBooks: number;
  finePerDay: number;
  returnDate: Date;
  issuedDate: Date;
  issuedBy: string;
  issuedTo: string;
}

export default LibraryModelType;