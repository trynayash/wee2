
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadSection = ({ onDownloadClick }: { onDownloadClick: () => void }) => {
  return (
    <section id="download" className="py-20 bg-[#2563eb] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Download the Full Case Study
        </motion.h2>

        <motion.p 
          className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get the complete breakdown of strategies, insights, and metrics in this downloadable PDF
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={onDownloadClick}
            size="lg" 
            className="bg-white text-[#2563eb] hover:bg-gray-100 px-8 py-6 font-sora text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Case Study
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
