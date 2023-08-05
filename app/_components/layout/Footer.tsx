import Contact from "@/app/(home)/_components/Contact";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-grey-600  px-4 md:flex md:flex-col md:items-center md:m-0 md:px-7 lg:m-0">
      <Contact />
      <div className="w-full max-w-section flex justify-center mt-10 border-t-[1px] border-primary-grey md:w-full">
        <Navbar />
      </div>
    </footer>
  );
}
