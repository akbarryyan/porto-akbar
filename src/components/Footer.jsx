import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="w-full py-8">
        <div className="flex justify-center items-center mb-2 gap-2">
          <a href="https://www.linkedin.com/in/akbarryyan/" target="_blank">
            <IoLogoLinkedin className="text-[22px] dark:text-white" />
          </a>
          <a href="https://www.instagram.com/akbrryyan" target="_blank">
            <IoLogoInstagram className="text-[22px] dark:text-white" />
          </a>
          <a href="https://github.com/akbarryyan" target="_blank">
            <IoLogoGithub className="text-[22px] dark:text-white" />
          </a>
        </div>
        <div className="flex items-center justify-center mt-1">
          <p className="text-[14px] text-[#546173] dark:text-white">
            &copy; Akbar Rayyan Al Ghifari. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
