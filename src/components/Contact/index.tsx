"use client"
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your email
    console.log("Form data:", data);
    alert("Your message has been sent to Rudrak. We'll contact you soon!");
    e.target.reset();
  };

  return (
    <>
      <Breadcrumb title={"Contact Rudrak"} pages={["contact"]} />

      <section className="overflow-hidden bg-[#FFFAF5] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Get in Touch with Rudrak</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Have questions or need spiritual guidance? Reach out to us and we&apos;ll respond as soon as possible.
</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information Card */}
            <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-xl border-t-4 border-orange-600 transform hover:scale-[1.01] transition-all duration-300">
              <div className="py-6 px-6 border-b border-gray-200">
                <h3 className="font-bold text-2xl text-orange-800 flex items-center gap-2">
                  <FaUser className="text-orange-600" />
                  Rudrak Contact Information
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <FaEnvelope className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a href="mailto:harshmalviya343@gmail.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                        harshmalviya343@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <FaPhone className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-orange-600 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <FaMapMarkerAlt className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        Rudrak Temple Complex,<br />
                        123 Spiritual Lane,<br />
                        Varanasi, UP 221001, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-xl border-t-4 border-orange-600 transform hover:scale-[1.01] transition-all duration-300 p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's your message about?"
                    className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // rows="5"
                    required
                    placeholder="Share your thoughts with Rudrak..."
                    className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition duration-200 bg-orange-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <IoIosSend className="text-xl" />
                  Send Message to Rudrak
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-orange-600">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115376.5840898302!2d82.92109395!3d25.3207623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Rudrak Temple Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;