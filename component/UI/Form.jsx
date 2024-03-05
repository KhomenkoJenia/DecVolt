import Button from "./Button.jsx";
import "./Form-contact.css";

export default function Form() {
  return (
    <>
      <div className="card">
        <span className="title">Contact</span>
        <form className="form">
          <div className="group">
            <input placeholder="" type="text" required="" />
            <label htmlFor="name">Your name</label>
          </div>
          <div className="group">
            <input
              placeholder=""
              type="email"
              id="email"
              name="email"
              required=""
            />
            <label htmlFor="email">Your email</label>
          </div>
          <div className="group">
            <textarea
              placeholder=""
              id="comment"
              name="comment"
              rows="5"
              required=""
            ></textarea>
            <label htmlFor="comment">Subject</label>
          </div>
          <div className="button-section">
            <a href="https://decvolt.com/privacy">
              <div>Privacy policy</div>{" "}
            </a>

            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </>
  );
}
