import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EnquiryForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Enquiry sent successfully!");
      form.current?.reset();
    })
    .catch((error) => {
      console.error("Email send error:", error.text);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div
      id="enquiry-form"
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Enquiry Form - TJX</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block font-medium">Full Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block font-medium">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
