import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className={`text-3xl fixed top-5 right-5 z-50 bg-white/30 backdrop-blur-lg p-3 rounded-full transition-transform duration-300 ${
          isOpen ? "rotate-90 scale-110" : "rotate-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <IoMdClose className="transition-all duration-300" /> : <CiMenuFries className="transition-all duration-300" />}
      </button>

      {/* Overlay & Animated Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-2xl text-center w-72 border border-white/40 transition-all duration-300 transform ${
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <h2 className="text-xl font-bold mb-4 text-white">Menu</h2>
          <ul className="space-y-3 text-white font-semibold">
            <li className="cursor-pointer hover:text-blue-300">Home</li>
            <li className="cursor-pointer hover:text-blue-300">Skills</li>
            <li className="cursor-pointer hover:text-blue-300">Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
