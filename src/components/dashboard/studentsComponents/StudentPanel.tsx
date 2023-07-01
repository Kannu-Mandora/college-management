import Image from "next/image";
import Link from "next/link";
import student_panel_images from "@jsons/studentPanelImages.json";
export default function studentPanel() {
  const imagePath =
    "https://ik.imagekit.io/egkxyv8la/College-Management/icons/";
  return (
    <>
      <section className="grid grid-cols-1 gap-4">
        {student_panel_images.map((value) => (
          <Link
            href={value.link}
            className="flex flex-col justify-center items-center px-3 py-4 hover:shadow-md shadow-blue-300 transition-shadow delay-75 ease-in-out"
            key={value._id}
          >
            <Image
              src={`${imagePath}/${value.imagePath}`}
              width={40}
              height={40}
              alt={value.text}
            />
            <span className="text-lg">{value.text}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
