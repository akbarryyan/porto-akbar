import BlurText from "../TextAnimations/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function Home() {
  return (
    <div className="px-4">
      <BlurText
        text="Test BlurText component"
        delay={250}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </div>
  );
}

export default Home;
