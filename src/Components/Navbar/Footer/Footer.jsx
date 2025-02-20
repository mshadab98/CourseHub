import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c30] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-lg">123-456-7890</p>
          <p className="text-lg">info@coursehub.com</p>

          <h3 className="mt-6 text-xl font-semibold">Never Miss a Class.</h3>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-gray-900"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="subscribe" className="mr-2" />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
            </div>
            <button className="mt-3 bg-blue-600 text-black font-semibold px-5 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          {/*social icons where to get touch on social media */}
          <div className="flex space-x-4 mt-6 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* its a footer section where the contact form is created*/}
        <div>
          <h2 className="text-3xl font-bold">Have Any Questions?</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name *" className="p-3 w-full rounded-md text-white border white" />
            <input type="text" placeholder="Last Name *" className="p-3 w-full rounded-md text-white border white" />
            <input type="email" placeholder="Email *" className="p-3 w-full rounded-md text-white col-span-2 border white" />
            <input type="text" placeholder="Subject" className="p-3 w-full rounded-md text-white col-span-2 border white" />
            <textarea placeholder="Type your message here..." className="p-3 w-full rounded-md white col-span-2 h-24 border white"></textarea>
            <button className="col-span-1 mt-2 bg-blue-600 text-black font-semibold px-5 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>

     
      <div className="text-center text-gray-400 mt-10">
        © {new Date().getFullYear()} Course Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
