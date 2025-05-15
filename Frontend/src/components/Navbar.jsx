import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [theme]);

  return (
    <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "bg-body-tertiary"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          ProductStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center d-flex gap-3">
        <Link className="nav-link active" to="/create">
            Create
        </Link>
            <i
              className={`bi ${theme === "dark" ? "bi-brightness-high-fill" : "bi-moon-fill"}`}
              role="button"
              title="Toggle Theme"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={toggleTheme}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
