
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = ({ onDownloadClick }: { onDownloadClick: () => void }) => {
  return (
    <section className="min-h-screen flex items-center bg-[#0f172a] text-white relative overflow-hidden">
      {/* Abstract Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]"></div>
        <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-full opacity-20 bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px] transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full opacity-15 bg-gradient-to-l from-blue-400 to-teal-300 blur-[100px] transform translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-[#2563eb] uppercase tracking-wider font-sora font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Case Study
          </motion.span>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Instagram Growth Campaign for WEE2
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From Awareness to Leads — How I Boosted Reach by 220% for a PR & Digital Brand
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={onDownloadClick} 
              size="lg" 
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
            >
              Download PDF
            </Button>

            <Button 
              variant="outline"
              size="lg" 
              className="border-[#2563eb] text-[#2563eb] hover:text-white hover:bg-[#2563eb]"
              onClick={() => {
                const element = document.getElementById('results');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Results
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border-2 border-[#2563eb]/20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#2563eb]/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#2563eb]/20 rounded-full"></div>
    </section>
  );
};

export default Hero;
