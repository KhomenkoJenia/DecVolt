import Image from "next/image";
import "./FirstScreen.css";
import bgImage from "@/assets/img/firstscreen.png";

export default function FirstScreen() {
  return (
    <>
      <section className="first-secreen-container">
        <Image loading="lazy" src={bgImage} className="first-screen-imge" />

        <div className="first-screen-title">
          Join the Electric Revolution: voltLink - Your Gateway to Sustainable
          Mobility
        </div>
      </section>
    </>
  );
}
