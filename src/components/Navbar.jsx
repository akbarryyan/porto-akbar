import { useState } from "react";
import { BiMoon, BiMenuAltLeft, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white relative">
      <nav className="flex justify-between items-center py-4 px-6 lg:px-32 lg:py-5">
        {/* Menu Toggle untuk Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <BiX
              className="text-[24px] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <BiMenuAltLeft
              className="text-[24px] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="gap-8 lg:gap-10 bg-white py-1 px-4 rounded-2xl border-2 border-gray-300 hidden md:flex">
          <li className="text-[15px] text-gray-700 font-semibold cursor-pointer hover:underline hover:text-neutral-800">
            Home
          </li>
          <li className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800">
            About
          </li>
          <li className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800">
            Projects
          </li>
          <li className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800">
            Techstack
          </li>
          <li className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Tetap Terlihat */}
        <div className="flex items-center gap-10 md:hidden">
          <ul className="gap-8 flex">
            <li className="cursor-pointer text-[14px] text-gray-600 font-semibold underline-offset-4 hover:underline hover:text-neutral-800">
              Home
            </li>
            <li className="cursor-pointer text-[14px] text-gray-600 font-semibold underline-offset-4 hover:underline hover:text-neutral-800">
              Projects
            </li>
          </ul>
          <BiMoon className="text-[20px] md:text-[25px] cursor-pointer" />
        </div>

        {/* Dark Mode Toggle (Desktop) */}
        <BiMoon className="text-[24px] cursor-pointer hidden md:flex" />
      </nav>

      {/* Navbar Links (Mobile) dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[60px] left-4 w-48 bg-white shadow-md flex flex-col items-start gap-3 py-4 px-4 rounded-md border border-gray-300 transition-all duration-300 md:hidden"
          >
            <li
              className="text-[15px] text-gray-700 font-semibold cursor-pointer hover:underline hover:text-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </li>
            <li
              className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
            <li
              className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </li>
            <li
              className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Techstack
            </li>
            <li
              className="text-[15px] text-gray-600 font-semibold cursor-pointer hover:underline hover:text-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
