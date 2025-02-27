import { BiMoon } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiX } from "react-icons/bi";

function Navbar() {
  return (
    <div className="bg-#FFFFFF">
      <nav className="flex justify-between items-center py-4 px-6 lg:px-32 lg:py-5">
        <BiMenuAltLeft className="text-[20px] cursor-pointer md:hidden" />
        <BiX className="text-[20px] cursor-pointer hidden" />
        <ul className="gap-8 lg:gap-10 bg-[#FFFFFF] py-1 px-4 rounded-2xl border-2 border-[#E5E7EB] hidden md:flex">
          <li className="text-[15px] text-[#525252] font-semibold cursor-pointer underline-offset-4 hover:underline hover:text-neutral-800">
            Home
          </li>
          <li className="text-[15px] text-[#6b6a6a] font-semibold cursor-pointer underline-offset-4 hover:underline hover:text-neutral-800">
            About
          </li>
          <li className="text-[15px] text-[#6b6a6a] font-semibold cursor-pointer underline-offset-4 hover:underline hover:text-neutral-800">
            Projects
          </li>
          <li className="text-[15px] text-[#6b6a6a] font-semibold cursor-pointer underline-offset-4 hover:underline hover:text-neutral-800">
            Techstack
          </li>
          <li className="text-[15px] text-[#6b6a6a] font-semibold cursor-pointer underline-offset-4 hover:underline hover:text-neutral-800">
            Contact
          </li>
        </ul>
        <div className="flex items-center gap-10 md:hidden">
          <ul className="gap-8 flex">
            <li className="cursor-pointer text-[14px] text-[#5C5C5C] font-semibold underline-offset-4 hover:underline hover:text-neutral-800">
              Home
            </li>
            <li className="cursor-pointer text-[14px] text-[#5C5C5C] font-semibold underline-offset-4 hover:underline hover:text-neutral-800">
              Projects
            </li>
          </ul>
          <BiMoon className="text-[20px] md:text-[25px] cursor-pointer" />
        </div>
        <BiMoon className="text-[24px] cursor-pointer hidden lg:flex" />
      </nav>
    </div>
  );
}

export default Navbar;
