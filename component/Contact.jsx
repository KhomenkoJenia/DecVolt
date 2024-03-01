import Image from "next/image";
import "./Contacts.css";
import contactImage from "@/assets/img/contactsImage.png";
import Form from "./UI/Form";

export default function Contacts() {
  return (
    <>
      <section className="contac-container">
        <Form />
        <div className="contact-box-img">
          <Image
            src={contactImage}
            width={535}
            className="img-contact"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
