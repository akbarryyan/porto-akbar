import { useState, useEffect } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Fungsi untuk mengubah tema
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsPaletteOpen(false); // Menutup palette setelah memilih tema
  };

  // Efek untuk mengubah kelas CSS pada elemen html
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "retro");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-[#181818] retro:bg-[#E4D8B4] relative">
      <nav className="flex justify-between items-center py-4 px-6 lg:px-32 lg:py-5">
        {/* Menu Toggle untuk Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <BiX
              className="text-[24px] cursor-pointer dark:text-white retro:text-[#352f44]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <BiMenuAltLeft
              className="text-[24px] cursor-pointer dark:text-white retro:text-[#352f44]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="gap-8 lg:gap-10 bg-white py-1 px-4 rounded-2xl border-2 border-gray-300 hidden md:flex dark:bg-[#181818] retro:bg-[#ffdd57]">
          <li className="text-[15px] text-gray-700 dark:text-white retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
            Home
          </li>
          <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
            About
          </li>
          <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
            Projects
          </li>
          <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
            Techstack
          </li>
          <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
            Contact
          </li>
        </ul>

        {/* Mobile Menu dan Palette Toggle */}
        <div className="flex items-center gap-10 md:hidden">
          <ul className="gap-8 flex">
            <li className="cursor-pointer text-[14px] text-gray-600 dark:text-white retro:text-[#352f44] font-semibold hover:underline">
              Home
            </li>
            <li className="cursor-pointer text-[14px] text-gray-600 dark:text-white retro:text-[#352f44] font-semibold hover:underline">
              Projects
            </li>
          </ul>
          <IoColorPaletteOutline
            className="text-[20px] md:text-[25px] cursor-pointer text-[#15171F] dark:text-white retro:text-[#352f44]"
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
          />
        </div>

        {/* Dark Mode Toggle (Desktop) */}
        <IoColorPaletteOutline
          className="text-[24px] text-black cursor-pointer hidden md:flex dark:text-white retro:text-[#352f44]"
          onClick={() => setIsPaletteOpen(!isPaletteOpen)}
        />
      </nav>

      {/* Navbar Links (Mobile) dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[60px] left-4 w-48 bg-white shadow-md flex flex-col items-start gap-3 py-4 px-4 rounded-md border border-gray-300 transition-all duration-300 dark:bg-[#181818] retro:bg-[#E4D8B4]"
          >
            <li className="text-[15px] text-gray-700 dark:text-white retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
              Home
            </li>
            <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
              About
            </li>
            <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
              Projects
            </li>
            <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
              Techstack
            </li>
            <li className="text-[15px] text-gray-600 dark:text-gray-300 retro:text-[#352f44] font-semibold cursor-pointer hover:underline">
              Contact
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Color Palette Menu */}
      <AnimatePresence>
        {isPaletteOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-4 top-16 w-40 bg-white shadow-md p-4 rounded-md border border-gray-300 dark:bg-[#181818] retro:bg-[#E4D8B4]"
          >
            <p className="text-gray-700 dark:text-white retro:text-[#352f44] font-semibold">
              Theme Options
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              <li
                className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 retro:text-[#352f44] hover:underline"
                onClick={() => toggleTheme("light")}
              >
                Light Mode
              </li>
              <li
                className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 retro:text-[#352f44] hover:underline"
                onClick={() => toggleTheme("dark")}
              >
                Dark Mode
              </li>
              <li
                className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 retro:text-[#352f44] hover:underline"
                onClick={() => toggleTheme("retro")}
              >
                Retro Mode
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
