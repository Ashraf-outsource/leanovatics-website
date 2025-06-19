import React from "react";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/yourformid" // Replace with your Formspree endpoint
      method="POST"
      className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold mb-2">Get A Quote Now!</h2>
      <p className="mb-4 text-gray-600">We Are Here to Help</p>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="border rounded px-3 py-2 w-full"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="border rounded px-3 py-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className="border rounded px-3 py-2 w-full"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          required
          className="mr-2"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the Terms & Conditions
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-[#0CBBF2] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Send Message
      </button>
      <div className="text-center mt-4">
        <a
          href="mailto:support@leanovatics.com"
          className="text-[#0CBBF2] hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Already a client? Contact support
        </a>
      </div>
    </form>
  );
}