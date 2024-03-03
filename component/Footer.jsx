import footerImg from "@/assets/img/logoFooter.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="footerImage flex flex-col md:flex-row gap-5 justify-between py-4 md:pr-20 md:pl-10 w-full text-xs text-black bg-blue-50 md:max-w-full mx-auto">
        <div className="my-auto max-w-full aspect-[2.7] w-[119px] ">
          <Image loading="lazy" src={footerImg} alt="Footer Logo" />
        </div>
        <div className="flex flex-grow flex-col justify-center items-center px-5 md:px-16 py-4 backdrop-blur-[32.75px] rounded-[43px] md:justify-between">
          <div className="footerImage flex gap-4  justify-between max-w-full w-[458px] md:max-w-none flex-col md:flex-row">
            <a href="#vision">
              <div>Our Vision</div>
            </a>
            <a href="#product">
              <div>Product</div>
            </a>
            <a href="#about">
              <div>About Us</div>
            </a>
            <a href="#contact">
              <div>Contacts</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
