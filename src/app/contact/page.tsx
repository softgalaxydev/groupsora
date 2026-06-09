"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState("");

  // generate random sum
  const generateCaptcha = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    setA(x);
    setB(y);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("All fields required");
      return;
    }

    if (parseInt(answer) !== a + b) {
      toast.error("Captcha wrong");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setAnswer("");
        generateCaptcha();
      } else {
        toast.error("Failed to send");
      }
    } catch (err) {
      toast.error("Error sending message");
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Contact Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
              Get in touch
            </h1>
            <p className="text-gray-900 text-lg">
              Have questions, feedback, or a copyright inquiry? Send us a message and our support team will respond within 24–48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Side: Brand Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Response Time Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex gap-4 items-start">
                <div className="bg-green-50 text-green-600 rounded-2xl p-3 flex items-center justify-center text-2xl select-none">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Fast Response</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our dedicated compliance and support desk is active from Monday to Friday, reviewing all inquiries promptly.
                  </p>
                </div>
              </div>

              {/* Bug Reports Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex gap-4 items-start">
                <div className="bg-blue-50 text-blue-600 rounded-2xl p-3 flex items-center justify-center text-2xl select-none">
                  🐛
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Feature & Bug Reports</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Experiencing layout errors or want to suggest an improvement? Mention it in the Subject line so it reaches our dev team.
                  </p>
                </div>
              </div>

              {/* DMCA & Takedown Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex gap-4 items-start">
                <div className="bg-amber-50 text-amber-600 rounded-2xl p-3 flex items-center justify-center text-2xl select-none">
                  🛡️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">DMCA & Takedowns</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To request group deletion, copyright claims, or privacy removals, submit the group's title and link in your message.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: The Premium Form */}
            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Copyright Claim / Bug Report / Feedback"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Message Content</label>
                  <textarea
                    placeholder="Provide detailed description of your request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black h-36 resize-none transition-all text-[15px]"
                  />
                </div>

                {/* Secure Captcha Box */}
                <div className="bg-linear-to-br from-green-50/70 to-emerald-50/30 border border-green-100 rounded-xl p-5 shadow-inner">
                  <h4 className="text-sm font-bold text-green-900 mb-2 flex items-center gap-1.5">
                    🛡️ Security Verification
                  </h4>
                  <p className="text-green-800 text-sm mb-3">
                    Please solve the simple math problem to prove you are human:
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <span className="bg-white border border-green-200 font-bold text-green-800 text-lg px-5 py-2.5 rounded-xl shadow-sm text-center flex items-center justify-center select-none min-w-30">
                      {a} + {b} = ?
                    </span>
                    <input
                      type="number"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Your answer"
                      className="flex-1 p-2.5 border border-green-200 focus:border-green-500 outline-none rounded-xl text-black bg-white focus:ring-2 focus:ring-green-500/20 text-center sm:text-left text-[15px]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md cursor-pointer select-none touch-manipulation active:scale-[0.98] transition-all duration-150 text-[16px] text-center"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}