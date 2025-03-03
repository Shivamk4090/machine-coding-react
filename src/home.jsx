import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function home() {
  return (
    <div className="container">
      <div className="items">
        <Link to="/toast">
          <button>Toast</button>
        </Link>
      </div>
      <div className="items">
        <Link to="/rating">
          <button>Rating</button>
        </Link>
      </div>
    </div>
  );
}
