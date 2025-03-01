import { BiAt } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";

function Contact() {
  return (
    <>
      <div className="bg-[#F3F4F6] dark:bg-[#181818] retro:bg-[#E4D8B4] valentine:bg-[#F2D7E7] py-3 px-3 rounded-md">
        <h1 className="text-lg font-bold dark:text-white">
          Want to hire me as a freelancer? Let&apos;s discuss
        </h1>
        <p className="text-[#546173] text-[14px] mt-2 dark:text-white">
          I&apos;m always excited to collaborate on innovative and exciting
          projects!
        </p>
        <div className="flex items-center gap-2 mt-4">
          <div className="bg-[#292929] w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <BiAt className="text-[24px] text-white" />
          </div>

          <div className="ml-1">
            <p className="text-[13px] text-[#5c5858] dark:text-[#ebe5e5] font-semibold">
              E-mail
            </p>
            <p className="font-semibold text-[15px] dark:text-white">
              akbarrayyan182@gmail.com
            </p>
          </div>
        </div>
        <p className="text-[#546173] text-[14px] mt-4 dark:text-white">
          Paste your message and let&apos;s discuss about your projects.
        </p>
        <button className="bg-[#292929] text-white text-[14px] w-full py-2 px-4 rounded-md mt-5">
          Chat on WhatsApp <ImWhatsapp className="text-[15px] ml-1 inline" />
        </button>
      </div>
    </>
  );
}

export default Contact;
