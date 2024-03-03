import "./CartProduct.css";

export default function CartProduct(props) {
  return (
    <>
      <div className="box-cart">
        <h3>{props.title}</h3>
        <h5>{props.subtitle}</h5>
      </div>
    </>
  );
}
