"use client";

import { document } from "postcss";
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
      <label for="theme" class="theme">
        <span class="theme__toggle-wrap">
          <input
            id="theme"
            class="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            onChange={toggleTheme}
          />
          <span class="theme__fill"></span>
          <span class="theme__icon">
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
            <span class="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </>
  );
}
