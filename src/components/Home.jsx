import BlurText from "../TextAnimations/BlurText/BlurText";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Navbar from "../components/Navbar";
import "../assets/Home.css";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function Home() {
  return (
    <>
      <Navbar />
      <div
        className="px-4 text-center flex flex-row justify-center items-center"
        id="background"
      >
        <div className="ml-[-30px] sm:ml-[10px]">
          <h1 className="text-3xl text-[#525252] dark:text-[#DFE0E2] retro:text-[#282425] retro:font-bold tracking-wide font-semibold dark:font-bold valentine:text-[#9F2547]">
            Hello there!
          </h1>
          <BlurText
            text="I am Akbar"
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl font-semibold flex justify-center items-center my-3 dark:text-white retro:text-[#625D56]"
          />

          {/* Example 3: Animate on view (runs once) */}
          <div className="text-[15px] text-[#5C5C5C] lg:text-[17px] dark:text-[#C9CACD] retro:text-[#282425]">
            <DecryptedText
              text="I'm "
              animateOn="view"
              revealDirection="center"
              speed="500"
            />
            <span className="font-bold">
              <DecryptedText
                text="Junior Developer"
                animateOn="view"
                revealDirection="center"
                speed="500"
              />
            </span>
            <DecryptedText
              text=" from Indramayu, West Java, Indonesia.
            I'm self-learning person who is interested in developing Discord Bots and Websites."
              animateOn="view"
              revealDirection="center"
              speed="500"
            />
          </div>
        </div>
      </div>
      <div className="mt-[-40px]">
        <div className="mb-8 px-4">
          <TechStack />
        </div>
        <About />
      </div>
    </>
  );
}

export default Home;
