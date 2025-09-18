import React, { useEffect, useState } from "react";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/yourprofile", icon: "📸" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "🔗" },
  // Add more as needed
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple form state (for demonstration)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Replace with your actual email sending logic or service
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-terracotta-500 px-6 py-3 rounded-2xl mb-8">
          Let's Connect!
        </h1>
        <p className="text-2xl text-black/90">Let’s Start a Conversation</p>
      </div>

      <div className="w-full max-w-4xl mx-auto grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-terracotta-100/80 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          {submitted ? (
            <div className="text-terracotta-500 text-xl font-semibold text-center">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-olive-900" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-olive-900" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-olive-900" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-olive-600 text-terracotta-800 font-bold py-3 rounded-lg hover:bg-olive-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="text-lg text-black text-center">
            <div className="mb-4">
              <span className="font-bold">Email:</span>{" "}
              <a href="mailto:hello@crewstorycollective.com" className="text-olive-700 underline">
                hello@crewstorycollective.com
              </a>
            </div>
            <div className="mb-4">
              <span className="font-bold">Mobile:</span>{" "}
              <a href="tel:+441234567890" className="text-olive-700 underline">
                +44 1234 567890
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-black">Follow us:</span>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:scale-110 transition"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;