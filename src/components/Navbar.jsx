import { BiMoon } from "react-icons/bi";
import { BiAlignLeft } from "react-icons/bi";

function Navbar() {
  return (
    <div className="bg-#FFFFFF shadow-md">
      <nav className="flex justify-between items-center py-4 px-6">
        <BiAlignLeft className="text-[22px] cursor-pointer md:hidden" />
        <ul className="gap-8 bg-#FFFFFF py-1 px-4 rounded-md border-2 border-[#E5E7EB] hidden md:flex">
          <li className="text-[15px] cursor-pointer">Home</li>
          <li className="text-[15px] cursor-pointer">About</li>
          <li className="text-[15px] cursor-pointer">Projects</li>
          <li className="text-[15px] cursor-pointer">Techstack</li>
          <li className="text-[15px] cursor-pointer">Contact</li>
        </ul>
        <BiMoon className="text-[22px] md:text-[25px] cursor-pointer" />
      </nav>
    </div>
  );
}

export default Navbar;
