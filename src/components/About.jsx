import { useState } from "react";
import { motion } from "framer-motion";
import { RiUserFollowLine } from "react-icons/ri";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { BsPersonVcard } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";

function About() {
  const [activeSection, setActiveSection] = useState("about");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-[#181818] retro:bg-[#E4D8B4] border border-gray-300 dark:border-gray-600 rounded shadow-lg py-3 transition-colors duration-300">
        {[
          { id: "about", title: "About Me", icon: <RiUserFollowLine /> },
          {
            id: "personalInfo",
            title: "Personal Information",
            icon: <BsPersonVcard />,
          },
          {
            id: "education",
            title: "Education",
            icon: <PiGraduationCapLight />,
          },
        ].map(({ id, title, icon }) => (
          <div key={id}>
            <div
              className="cursor-pointer flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => toggleSection(id)}
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 retro:text-[#59534A]">
                {icon}
                <h1 className="font-semibold uppercase retro:text-[#59534A]">
                  {title}
                </h1>
              </div>
              {activeSection === id ? (
                <IoIosArrowRoundUp className="text-2xl text-gray-600 dark:text-gray-400 retro:text-[#59534A]" />
              ) : (
                <IoIosArrowRoundDown className="text-2xl text-gray-600 dark:text-gray-400 retro:text-[#59534A]" />
              )}
            </div>
            {activeSection === id && (
              <motion.div
                className="text-gray-600 dark:text-gray-300 mt-2 text-sm px-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {id === "about" && (
                  <p className="retro:text-[#59534A]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas quisquam in tenetur quidem provident dolor optio
                    facere.
                  </p>
                )}
                {id === "personalInfo" && (
                  <div className="retro:text-[#59534A]">
                    <p>Name: Akbar Rayyan Al Ghifari</p>
                    <p>Date of Birth: April 01, 2004</p>
                    <p>Place of Birth: Indramayu, Indonesia</p>
                  </div>
                )}
                {id === "education" && (
                  <div className="retro:text-[#59534A]">
                    <p>University: [Your University Name]</p>
                    <p>Major: [Your Major]</p>
                    <p>Year of Study: [Your Year]</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
