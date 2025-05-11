// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-sm">&copy; 2025 Your Company Name. All rights reserved.</p>
        <ul className="mt-4 flex justify-center space-x-6">
          <li>
            <a href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
