import React from "react";

export default function UserReviews() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">User Review</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-white p-4 rounded-xl shadow-md w-64 flex flex-col items-center"
          >
            <img
              src={`https://randomuser.me/api/portraits/men/${num + 10}.jpg`}
              alt="User"
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="italic">"This extension changed how I work!"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
