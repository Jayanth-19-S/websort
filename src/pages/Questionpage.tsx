"use client"

import type React from "react"
import { useState } from "react"
import questionBg from "../assets/quesion.png.jpg"

export default function QuestionPage() {
  const [form, setForm] = useState({ name: "", email: "", number: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission logic here
    alert("Submitted!")
    console.log("Form data:", form)

    // Reset form
    setForm({ name: "", email: "", number: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative px-2 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={questionBg} alt="Space background with Earth" className="object-cover w-full h-full" />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-12 mb-16">
        {/* Left Side - Heading */}
        <div className="flex-1 flex flex-col items-center md:items-start text-white mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center md:text-left leading-tight">
            Questions?
            <br />
            We're here to answer them!
          </h2>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col gap-6 min-w-[320px] max-w-md w-full shadow-xl border border-white/10"
        >
          <label className="text-white font-semibold text-lg flex flex-col gap-2">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 py-2 transition-colors duration-300"
              placeholder="Enter your name"
              required
            />
          </label>

          <label className="text-white font-semibold text-lg flex flex-col gap-2">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 py-2 transition-colors duration-300"
              placeholder="Enter your email"
              required
            />
          </label>

          <label className="text-white font-semibold text-lg flex flex-col gap-2">
            Number
            <input
              type="tel"
              name="number"
              value={form.number}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 py-2 transition-colors duration-300"
              placeholder="Enter your number"
              required
            />
          </label>

          <label className="text-white font-semibold text-lg flex flex-col gap-2">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-white/90 text-black rounded-2xl p-4 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Type your message..."
              required
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl mt-2 transition-all duration-300 text-lg transform hover:scale-105 disabled:scale-100 shadow-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}
