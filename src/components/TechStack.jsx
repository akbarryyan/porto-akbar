import {
  BiLogoPhp,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoReact,
  BiLogoJquery,
} from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaLaravel } from "react-icons/fa6";
import { SiXampp, SiMysql, SiVite } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { LiaGithub } from "react-icons/lia";

function TechStack() {
  return (
    <>
      <h1 className="text-2xl font-bold">Tech Stack</h1>
      <p className="text-[14px] mt-1">Some stacks I have use in my projects.</p>
      <div className="flex justify-center items-center mt-3 ml-3">
        <div className="grid grid-cols-6 gap-4">
          <BiLogoPhp className="text-3xl" />
          <DiJavascript1 className="text-3xl" />
          <BiLogoTailwindCss className="text-3xl" />
          <BiLogoBootstrap className="text-3xl" />
          <BiLogoReact className="text-3xl" />
          <FaLaravel className="text-3xl" />
          <BiLogoJquery className="text-3xl" />
          <SiXampp className="text-3xl" />
          <TiHtml5 className="text-3xl" />
          <IoLogoCss3 className="text-3xl" />
          <LiaGithub className="text-3xl" />
          <SiMysql className="text-3xl" />
          <SiVite className="text-3xl" />
        </div>
      </div>
    </>
  );
}

export default TechStack;
