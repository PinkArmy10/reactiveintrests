import React, { useState } from "react";

const Letter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here (e.g., API call)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-100 rounded shadow-md text-center">
      <h3 className="text-xl font-semibold mb-4">Subscribe to my Newsletter</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium">Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default Letter;
