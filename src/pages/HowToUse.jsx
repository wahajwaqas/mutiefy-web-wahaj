import React from "react";

export default function HowToUse() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-4">How to Use</h2>
      <div className="max-w-3xl mx-auto">
        <video controls className="rounded-xl mx-auto">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
