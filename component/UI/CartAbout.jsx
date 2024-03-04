import Image from "next/image";
import "./CartAbout.css";
import imgeLinkedin from "@/assets/img/linkedin.svg";

export default function CartAbout(props) {
  return (
    <>
      <div className="cart-about">
        <Image loading="lazy" src={props.imge} className="img-about" />
        <div className="cart-body">
          <div className="cart-name">{props.name}</div>
          <div className="cart-descr">{props.description}</div>
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            <Image loading="lazy" src={imgeLinkedin} className="img-linkedin" />
          </a>
        </div>
      </div>
    </>
  );
}
