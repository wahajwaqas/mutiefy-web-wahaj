import React from "react";

export default function PricingPlans() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Plan & Pricing</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="border p-6 rounded-xl w-64 shadow">
          <h3 className="text-lg font-bold mb-2">Basic</h3>
          <p className="text-orange-500 text-2xl mb-4">$1 Trial</p>
          <ul className="text-left list-disc list-inside">
            <li>Limited Mutes</li>
            <li>One Device</li>
          </ul>
        </div>
        <div className="border-4 border-orange-500 p-6 rounded-xl w-64 shadow bg-orange-100">
          <h3 className="text-lg font-bold mb-2">Deluxe</h3>
          <p className="text-orange-500 text-2xl mb-4">$299</p>
          <ul className="text-left list-disc list-inside">
            <li>Unlimited Mutes</li>
            <li>Multi-Device</li>
            <li>Premium Support</li>
          </ul>
        </div>
        <div className="border p-6 rounded-xl w-64 shadow">
          <h3 className="text-lg font-bold mb-2">Platinum</h3>
          <p className="text-orange-500 text-2xl mb-4">$299</p>
          <ul className="text-left list-disc list-inside">
            <li>All Deluxe Features</li>
            <li>Team Access</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
