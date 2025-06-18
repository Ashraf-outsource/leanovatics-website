import React, { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function formComplete(e: React.FormEvent) {
    e.preventDefault();
    // Yahan aap API call bhi kar sakte hain
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="text-green-600 font-semibold">Thank you! Your quote request has been submitted.</div>;
  }

  return (
    <form onSubmit={formComplete} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-[#0CBBF2] hover:bg-[#4548CF] text-white px-4 py-2 rounded">
        Request Quote
      </button>
    </form>
  );
}