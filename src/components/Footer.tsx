
import React from "react";
import { Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-sora">Yash Suthar</h3>
            <p className="mb-4 text-gray-300">Social Media Manager & Digital Marketing Specialist</p>
            <div className="space-y-2 mb-6">
              <a href="mailto:capturewithyxsh@gmail.com" className="block text-gray-300 hover:text-white transition-colors">
                capturewithyxsh@gmail.com
              </a>
              <a href="tel:+919561713120" className="block text-gray-300 hover:text-white transition-colors">
                +91 9561713120
              </a>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/yash-suthar-9834ba354/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/iyashrs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://sanatbhatt.my.canva.site/yashsutharportfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Designed by Yash Suthar</p>
            <p className="text-gray-400 text-sm">&copy; 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
