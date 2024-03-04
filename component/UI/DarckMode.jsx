"use client";
import Form from "react-bootstrap/Form";

import "./DarckMode.css";

export default function DarckMode() {
  const setDarckMode = () => {
    if (typeof window !== "undefined") {
      window.document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };

  const setLightMode = () => {
    if (typeof window !== "undefined") {
      window.document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarckMode();
    else setLightMode();
  };
  return (
    <>
      <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          onChange={toggleTheme}
        />
      </Form>
    </>
  );
}
