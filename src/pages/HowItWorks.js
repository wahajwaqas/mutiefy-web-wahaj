import React from "react";
import "./HowItWorks.css";
import Step from './step';


export default function HowItWorks() {
  return (
    <section class="how-it-works">
      <h2 class="header-extension">How It Works</h2>
      <p class="explain">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A atque, suscipit aliquid unde voluptates quibusdam nemo,
        nulla modi quidem quas harum doloremque aperiam odio? Ipsum eius voluptatum reiciendis dolorem hic.</p>
      <div class="steps">
        <Step></Step>
        <svg width="98" height="16" viewBox="0 0 98 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M97.7071 8.70714C98.0976 8.31661 98.0976 7.68345 97.7071 7.29292L91.3431 0.928963C90.9526 0.538438 90.3195 0.538438 89.9289 0.928963C89.5384 1.31949 89.5384 1.95265 89.9289 2.34318L95.5858 8.00003L89.9289 13.6569C89.5384 14.0474 89.5384 14.6806 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70714ZM0 8.00003V9.00003H97V8.00003V7.00003H0V8.00003Z" fill="black" />
        </svg>

        <Step></Step>
        <svg width="98" height="16" viewBox="0 0 98 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M97.7071 8.70714C98.0976 8.31661 98.0976 7.68345 97.7071 7.29292L91.3431 0.928963C90.9526 0.538438 90.3195 0.538438 89.9289 0.928963C89.5384 1.31949 89.5384 1.95265 89.9289 2.34318L95.5858 8.00003L89.9289 13.6569C89.5384 14.0474 89.5384 14.6806 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70714ZM0 8.00003V9.00003H97V8.00003V7.00003H0V8.00003Z" fill="black" />
        </svg>

        <Step></Step>
      </div>
    </section >
  );
}
