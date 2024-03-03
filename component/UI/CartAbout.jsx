import Image from "next/image";
import "./CartAbout.css";
import imgeLinkedin from "@/assets/img/linkedin.png";

export default function CartAbout(props) {
  return (
    <>
      <div className="cart-about">
        <Image loading="lazy" src={props.imge} className="img-about" />
        <div className="cart-body">
          <div className="cart-name">{props.name}</div>
          <div className="cart-descr">{props.description}</div>
          <Image loading="lazy" src={imgeLinkedin} className="img-linkedin" />
        </div>
      </div>
    </>
  );
}
