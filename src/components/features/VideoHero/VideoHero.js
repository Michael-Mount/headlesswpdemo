import "./VideoHero.css";

export default function VideoHero() {
  return (
    <section className="hero-video">
      <video
        src="https://media.videopolis.com/1.0/api/getById/eng/575acddfde6060d6117e2217f1bb120ae3222fe7.html?key=1a917ba295a7fb07&tracking=false&view=hero&phone=hero"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
