import Image from "next/image";
import "./About.css";
import aboutImge from "@/assets/img/about1.png";
import aboutImgeSecond from "@/assets/img/about2.png";
import CartAbout from "./UI/CartAbout";
import autorImge from "@/assets/img/aboutcart1.png";
import autorImgeSecond from "@/assets/img/aboutcart2.png";
import autorImgeTherd from "@/assets/img/aboutcart3.png";
import autorImgeFour from "@/assets/img/aboutcart4.png";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-us">
        <Image
          width={447}
          height={405}
          loading="lazy"
          src={aboutImge}
          className="imge-about-first"
        />
        <Image
          width={205}
          height={405}
          loading="lazy"
          src={aboutImgeSecond}
          className="imge-about-second"
        />
        <div className="about-us-box">
          <h2>About Us</h2>
          <h5>
            At decVolt, our team embodies a winning combination of expertise,
            passion, and innovation. With backgrounds spanning physics,
            mathematics, software development, AI, and blockchain, we boast the
            technical prowess necessary to engineer groundbreaking solutions in
            the energy sector. What truly sets us apart is our unwavering
            commitment to sustainability and our drive to revolutionize the
            entire energy ecosystem.
          </h5>
          <h5>
            Our North Star is a shared vision: to revolutionize energy
            transmission. This vision is not merely a lofty aspiration but a
            deep-seated belief that energy can be harnessed, transmitted, and
            utilized in more sustainable, decentralized, and tech-driven ways.
            We refuse to accept the status quo; we're driven to disrupt the
            energy landscape and usher in a new era of energy consumption.
          </h5>
          <h5>
            Bound by a common purpose, our team is dedicated to empowering
            individuals and communities with intelligent, green energy
            solutions. We firmly believe that by harnessing the power of
            cutting-edge technology, we can make a lasting impact on the world.
            With decVolt, we're not just a team; we're a force for positive
            change, ready to tackle the challenges of tomorrow's energy
            landscape head-on. Our unwavering commitment to sustainability,
            coupled with our technical expertise, positions us as leaders in the
            energy revolution.
          </h5>
        </div>
      </div>
      <div className="about-autors">
        <div className="title-team">
          <h3>Team</h3>
          <h5>
            Our team includes seasoned physicist, IT professionals,
            entrepreneurs, technology managers, and thought leaders. With
            decades of collective experience in fundamental research, software
            development, product management, quality assurance, and professional
            services. Our diverse skill set, coupled with a relentless drive for
            excellence, ensures that decVolt remains at the forefront of
            innovation in the energy sector.
          </h5>
        </div>
        <div className="autors-box">
          <CartAbout
            imge={autorImge}
            name={"Dr. Sumeet Chougule"}
            description={"Co-founder and CEO"}
          />
          <CartAbout
            imge={autorImgeSecond}
            name={"Mark Tsang"}
            description={"Co-founder and COO"}
          />
        </div>
        <div className="autors-box">
          <CartAbout
            imge={autorImgeTherd}
            name={"David Thomas"}
            description={"Co-founder and CTO"}
          />
          <CartAbout
            imge={autorImgeFour}
            name={"Stefano Tempesta"}
            description={"Co-founder and CPO"}
          />
        </div>
      </div>
    </section>
  );
}
