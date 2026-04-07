import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

function Bottomheader() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    setCategoryOpen(false);
    setMobileMenuOpen(false);
    setMobileCategoryOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categoryData) => {
        setData(categoryData);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="bottom-header">
      <div className="btm-container">
        <nav>
          {/* Desktop Category Dropdown */}
          <div className="category">
            <div
              className="category-btn"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <IoMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div
              className={`category-nav-list ${categoryOpen ? "active" : ""}`}
            >
              {data &&
                data.map((category) => (
                  <Link to={`/category/${category.slug}`} key={category.slug}>
                    {" "}
                    {category.name}{" "}
                  </Link>
                ))}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {NavLinks.map((link) => (
              <li
                key={link.link}
                className={location.pathname === link.link ? "active" : ""}
              >
                <Link key={link.title} to={link.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </nav>

        {/* Desktop Sign Icons */}
        <div className="sign-regs-icon">
          <Link to="/">
            <PiSignIn />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu">
          {/* Mobile Nav Links */}
          <div className="mobile-nav-links">
            {NavLinks.map((link) => (
              <Link
                key={link.link}
                to={link.link}
                className={location.pathname === link.link ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Categories */}
          <div className="mobile-categories">
            <button
              className="mobile-category-toggle"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
            >
              <span>Browse Categories</span>
              <IoMdArrowDropdown className={mobileCategoryOpen ? "rotated" : ""} />
            </button>
            <div className={`mobile-category-list ${mobileCategoryOpen ? "active" : ""}`}>
              {data &&
                data.map((category) => (
                  <Link
                    to={`/category/${category.slug}`}
                    key={category.slug}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
            </div>
          </div>

          {/* Mobile Sign Links */}
          <div className="mobile-sign-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <PiSignIn /> Sign In
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <FaUserPlus /> Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottomheader;
