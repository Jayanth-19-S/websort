import type React from "react"
import { useState } from "react"
import locationBg from '../assets/location.png'
import redngrenBg from '../assets/redngren.jpg'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-64"
        style={{
          backgroundImage: `url(${locationBg})`,
        }}
      >
        <div className="absolute inset-0 bg-red bg-opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="text-right text-black max-w-xl">
            <h1 className="text-6xl font-bold">Contact Us</h1>
            <p className="mt-6 text-xl">
              Have a question, idea, or project in mind? We're here to help — get in touch with us today.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${redngrenBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark background with abstract pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black opacity-60">
          {/* Abstract geometric patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-32 h-32 bg-green-500 transform rotate-45 opacity-20"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-red-500 transform rotate-12 opacity-25"></div>
            <div className="absolute bottom-32 left-40 w-28 h-28 bg-green-400 transform -rotate-12 opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-36 h-36 bg-red-400 transform rotate-45 opacity-15"></div>
            {/* Additional geometric shapes */}
            <div className="absolute top-60 left-1/3 w-20 h-20 bg-green-600 transform rotate-30 opacity-25"></div>
            <div className="absolute top-80 right-1/4 w-16 h-16 bg-red-600 transform -rotate-45 opacity-30"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-10 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-white text-4xl font-bold mb-4">Need support or want to collaborate?</h2>
              <p className="text-gray-300 text-lg">Fill out the form and our team will get back to you shortly</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="secondName"
                    placeholder="Second Name"
                    value={formData.secondName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="message"
                    placeholder="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-6 text-lg"
                  />
                </div>
                {/* <div>
                  <div className="mb-4">
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      name="message"
                     
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black bg-opacity-50 border border-red-500 text-white placeholder-white p-3 w-full h-20 resize-none focus:outline-none"
                    />
                  </div>
                </div> */}
              </div>

              {/* Submit Button */}
              <div className="mt-2 mb-16">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-12 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Address Section */}
      <section className="py-16" style={{ backgroundColor: '#0B0014' }}>
        <div className="max-w-6xl mx-auto px-10">
          <h3 className="text-white text-3xl font-bold mb-8 text-center">Address</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Google Map */}
            <div className="lg:col-span-2 relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.736842105263!2d77.60394!3d12.916667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149d4c7c3b7d%3A0x4c7c3b7d4c7c3b7d!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Address Info */}
            <div className="flex items-center">
              <div className="bg-gray-800 p-6 rounded-lg w-full h-fit">
                <div className="space-y-4 text-gray-300">
                  <p className="text-white text-lg font-medium">Based in Bangalore |</p>
                  <p className="text-gray-300">info@thewebsort.com</p>
                  <p className="text-gray-300">+91-9380583373</p>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      BTM Layout
                      <br />
                      Bangalore South
                      <br />
                      Karnataka 560068
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
