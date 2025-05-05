import React from "react";
import "./HowItWorks.css";
import Step from "./pages/step";


export default function HowItWorks() {
  return (
    <section class="how-it-works">
      <h2 class="header">How It Works</h2>
      <p class="explain">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque, suscipit aliquid unde voluptates quibusdam nemo,
        nulla modi quidem quas harum doloremque aperiam odio? Ipsum eius voluptatum reiciendis dolorem hic.</p>
      <div class="steps">
        <Step></Step>
        <Step></Step>
        <Step></Step>
        </div>
    </section >
  );
}
