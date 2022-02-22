import Image from "next/image";
import Link from "next/link";
import logo from "/assets/img/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="img">
        <Image
          src={logo}
          height="50"
          width="160"
          objectFit="contain"
          alt="webabby brand"
        />
      </div>
      <div className="content">
        <nav className="nav">
          <Link href="/home">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <button className="cta">Contact Us</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
