import BlurText from "../TextAnimations/BlurText/BlurText";
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
      <div>
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
        <p className="text-[15px] text-[#5C5C5C] lg:text-[17px]">
          I&apos;m <span className="font-semibold">Junior Developer</span> from
          Indramayu, West Java, Indonesia. <br />
          I&apos;m self-learning person who is interested in developing Discord
          Bots and Websites
        </p>
      </div>
    </div>
  );
}

export default Home;
