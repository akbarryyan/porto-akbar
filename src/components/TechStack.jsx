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
      <h1 className="text-2xl font-bold dark:text-white">Tech Stack</h1>
      <p className="text-[14px] mt-1 dark:text-white">
        Some stacks I have use in my projects.
      </p>
      <div className="flex items-center mt-3 ml-3">
        <div className="grid grid-cols-6 gap-4">
          <BiLogoPhp className="text-3xl dark:text-white" />
          <DiJavascript1 className="text-3xl dark:text-white" />
          <BiLogoTailwindCss className="text-3xl dark:text-white" />
          <BiLogoBootstrap className="text-3xl dark:text-white" />
          <BiLogoReact className="text-3xl dark:text-white" />
          <FaLaravel className="text-3xl dark:text-white" />
          <BiLogoJquery className="text-3xl dark:text-white" />
          <SiXampp className="text-3xl dark:text-white" />
          <TiHtml5 className="text-3xl dark:text-white" />
          <IoLogoCss3 className="text-3xl dark:text-white" />
          <LiaGithub className="text-3xl dark:text-white" />
          <SiMysql className="text-3xl dark:text-white" />
          <SiVite className="text-3xl dark:text-white" />
        </div>
      </div>
    </>
  );
}

export default TechStack;
