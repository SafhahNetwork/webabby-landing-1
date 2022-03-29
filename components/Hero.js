import Image from "next/image";
import heroImg from "/assets/img/hero.webp";

const Hero = () => {
  return (
    <div className="hero g-1">
      <div className="img">
        <Image
          src={heroImg}
          width="500"
          height="400"
          objectFit="contain"
          alt=""
          priority
        />
      </div>
      <div className="content">
        <h1 className="head">Reliable and affordable graphic design</h1>
        <p className="sub">
          Work with the best graphic designers around the world, and change how
          client see you!
        </p>
        <div className="actions">
          <button className="cta">Contact Us</button>
          <button className="cta cta-2">Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
