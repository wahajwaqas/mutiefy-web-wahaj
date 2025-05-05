import React from "react";
import "./UserReview.css";
import User1 from "../images/1.png";
import User2 from "../images/2.png";
import User3 from "../images/3.png";

export default function UserReviews() {
  return (
    <section className="outer-box">
      <h2 className="header-extension">User Review</h2>
      <p class="explain">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In convallis cursus venenatis. Vivamus nec nisi sit amet leo laoreet viverra. </p>
      <div className="review-list">
        <div
          className="img-container"
        >
          <img
            src={User1}
            alt="User1"
            className=""
          />
        </div>
        <div
          className="img-container special"
        >
          <img
            src={User2}
            alt="User2"
            className=""
          />
        </div>
        <div
          className="img-container"
        >
          <img
            src={User3}
            alt="User3"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
