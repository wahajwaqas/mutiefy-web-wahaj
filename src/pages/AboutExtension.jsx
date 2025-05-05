import React from "react";
import "./AboutExtension.css";
import FullLogo from "../images/FullLogo.png";

export default function AboutExtension() {
  return (
    <section class="outer-box">
      <h2 class="header">
        About Extension
      </h2>
      <p class="explain">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque, suscipit aliquid unde voluptates quibusdam nemo,
        nulla modi quidem quas harum doloremque aperiam odio? Ipsum eius voluptatum reiciendis dolorem hic.</p>
      <div class="inner-box">
        <div class="orange-circle-back"></div>
        <div class="card">
          <img class="card-header" src={FullLogo} alt="Muteify" />
          <div class="card-circle">
            MUTE
          </div>
          <div class="status">Status: <p>&nbsp;Muted</p></div>
          <div class="card-policy">By using this extension, you submitted with
            <a href="/">Terms and Conditions</a> and <a href="/">Privacy Policy</a></div>
        </div>
        <div class="box first">100% Real-Time Music Blocker</div>
        <div class="box second"><div>2k Users</div> Have used our product</div>
        <div class="box third">Block All Instruments</div>
        <div class="box fourth">Only Allow Vocals</div>
      </div>
    </section>
  );
}
