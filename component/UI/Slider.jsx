"use client";
import "./Slider.css";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImage from "@/assets/img/product1.png";
import productImageSecond from "@/assets/img/product2.png";
import productImageTherd from "@/assets/img/product3.png";
import productImageFour from "@/assets/img/product4.png";

export default function SliderCastom() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Количество отображаемых слайдов
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // изменения применяются при ширине экрана <= 768px
        settings: {
          dots: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="box-slider">
          <Image src={productImage} alt="book" fluid />
          <h3>
            Peer-to-peer charging network connecting EV owners and charger hosts
          </h3>
        </div>
        <div className="box-slider">
          <Image src={productImageSecond} alt="book" fluid />
          <h3>
            Maximizes the utilization of home chargers, optimizing
            infrastructure
          </h3>
        </div>
        <div className="box-slider">
          <Image src={productImageTherd} alt="book" fluid />
          <h3>
            Scalable and adaptable platform designed to meet evolving market
            demands
          </h3>
        </div>
        <div className="box-slider">
          <Image src={productImageFour} alt="book" fluid />
          <h3>
            Promotes EV adoption by improving charging access in residential
            areas
          </h3>
        </div>
      </Slider>
    </>
  );
}
