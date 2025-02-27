import BlurText from "../TextAnimations/BlurText/BlurText";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import "../assets/Home.css";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function Home() {
  return (
    <div
      className="px-4 text-center flex flex-row justify-center items-center"
      id="background"
    >
      <div className="ml-[-30px] sm:ml-[10px]">
        <h1 className="text-3xl text-[#525252] tracking-wide font-semibold">
          Hello there!
        </h1>
        <BlurText
          text="I am Akbar"
          delay={250}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl font-semibold flex justify-center items-center my-3"
        />

        {/* Example 3: Animate on view (runs once) */}
        <div className="text-[15px] text-[#5C5C5C] lg:text-[17px]">
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
  );
}

export default Home;
