import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  bg-blue-900 text-white p-6 shadow-lg   ">
      <div className="container mx-auto flex justify-between items-center md:px-[10rem] px-4">
        <Link to="/" className="text-white font-extrabold text-3xl">
          Course Hub
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7">
          <Link
            to="/"
            className="text-white font-bold hover:underline block py-2"
          >
            Home{" "}
          </Link>
          <Link
            to="/courses"
            className="text-white font-bold hover:underline block py-2"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="text-white font-bold hover:underline block py-2"
          >
            Dashboard
          </Link>
        </div>

        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2">
          <Link
            to="/"
            className="text-white font-bold hover:underline block py-2"
          >
            Home{" "}
          </Link>
          <Link
            to="/courses"
            className="text-white font-bold hover:underline block py-2"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="text-white font-bold hover:underline block py-2"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
