import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_PUBLIC_KEY);


    console.log('Form submitted:', formData);

    // Reset form after successful submission (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Contact Us Card Container */}
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        {/* Contact Us Card */}
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

          {/* Card Title */}
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Contact Us
          </h2>

          <form className="mt-10" onSubmit={handleSubmit}>
            {/* Name Input */}
            <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              className="block w-full py-3 px-1 mt-2 
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={formData.name}
              onChange={handleChange}
            />

            {/* Email Input */}
            <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={formData.email}
              onChange={handleChange}
            />

            {/* Message Input */}
            <label htmlFor="message" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              className="block w-full h-32 py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                font-medium text-white uppercase
                focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
