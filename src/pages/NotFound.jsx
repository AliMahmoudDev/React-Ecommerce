import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import "./notFound.css";

function NotFound() {
  return (
    <PageTransition>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="not-found-btn">
            Go Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}

export default NotFound;
