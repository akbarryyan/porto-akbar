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
      <div
        className="w-full max-w-lg bg-white dark:bg-[#181818] retro:bg-[#E4D8B4] valentine:bg-[#F2D7E7] border rounded shadow-lg py-3 transition-colors duration-300"
        style={{ boxShadow: "5px 5px" }}
      >
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
                  <div className="relative retro:text-[#59534A]">
                    <div className="border-l-2 border-gray-400 dark:border-gray-600 space-y-4">
                      <div className="relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                        <div className="flex flex-col ml-4">
                          <p className="font-semibold">2021 - 2025</p>
                          <p>University of Technology</p>
                          <p>Major: Computer Science</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                        <div className="flex flex-col ml-4">
                          <p className="font-semibold">2018 - 2021</p>
                          <p>Senior High School XYZ</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                        <div className="flex flex-col ml-4">
                          <p className="font-semibold">2015 - 2018</p>
                          <p>Junior High School ABC</p>
                        </div>
                      </div>
                    </div>
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
