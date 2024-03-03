import "./Product.css";
import CartProduct from "./UI/CartProduct";
import SliderCastom from "./UI/Slider";

export default function Product() {
  return (
    <>
      <section id="product" className="product-container">
        <h2>Product</h2>
        <h3>
          Introducing voltLink: Empowering the Electric Vehicle Revolution
        </h3>
        <div className="cart-product-box">
          <CartProduct
            title={"Unlocking the Power of Peer-to-Peer EV Charging"}
            subtitle={
              "voltLink isn't just another charging solution; it's a catalyst for change in the electric vehicle (EV) industry. With voltLink, we're revolutionizing the way EV owners charge their vehicles by harnessing the power of peer-to-peer connectivity."
            }
          />
          <CartProduct
            title={"Convenience Meets Sustainability"}
            subtitle={
              "Gone are the days of searching for available charging stations. With voltLink, EV owners can seamlessly connect to a network of home chargers hosted by individuals just like them. Our platform transforms ordinary parking spaces into dynamic charging hubs, promoting convenience, accessibility, and sustainability."
            }
          />
          <CartProduct
            title={"Decentralizing EV Charging Infrastructure"}
            subtitle={
              "voltLink isn't just about charging your vehicle; it's about reshaping the entire EV charging landscape. By decentralizing charging infrastructure, we're putting the power back into the hands of the community. Hosts can monetize their home chargers, while EV owners enjoy hassle-free access to a widespread charging network."
            }
          />
          <CartProduct
            title={"The Future of Mobility Starts Here"}
            subtitle={
              "At decVolt, we're not just building a product; we're pioneering a movement. voltLink is more than a charging platform; it's a testament to our commitment to driving sustainable transportation solutions. Join us as we embark on a journey to electrify the world and shape the future of mobility."
            }
          />
        </div>
        <div className="box-silder-product">
          <h3 className="title-sider">Key Features</h3>

          <SliderCastom />
        </div>
      </section>
    </>
  );
}
