"use client";
import React from "react";

import Link from "next/link";

interface Private {
  id: number;
  section: string;
  link: { label: string; href: string }[];
}

const Privates: Private[] = [
  {
    id: 1,
    section: "Company",
    link: [{ label: "Privacy Policy", href: "/privacy" }],
  },
];

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      {/* 🔗 Showing Navigation Links from Array */}
      <div className="mb-10">
        {Privates.map((section) => (
          <div key={section.id}>
            <h3 className="text-xl font-semibold mb-2">{section.section}</h3>
            <ul className="list-disc pl-5">
              {section.link.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-blue-600 underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 👇 Privacy Content Starts */}
      <p className="mb-4">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our software or services.
      </p>

      {/* More content below... */}
    </div>
  );
};

export default PrivacyPage;
