import React from "react";
import "./HowToUse.css";

export default function HowToUse() {
  return (
    <section class="outer-box">
      <h2 class="header-extension">How to Use</h2>
      <p class="explain">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque, suscipit aliquid unde voluptates quibusdam nemo,
        nulla modi quidem quas harum doloremque aperiam odio? Ipsum eius voluptatum reiciendis dolorem hic.</p>
      <div class="video-container">
        <video controls class="video-container-inner">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
