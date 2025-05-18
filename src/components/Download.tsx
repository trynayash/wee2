
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, File } from "lucide-react";

const DownloadSection = ({ 
  onDownloadClick, 
  onRoadmapClick 
}: { 
  onDownloadClick: () => void;
  onRoadmapClick: () => void;
}) => {
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
          Download Resources
        </motion.h2>

        <motion.p 
          className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get access to detailed resources to help you implement effective Instagram growth strategies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
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
            <FileText className="mr-2 h-5 w-5" />
            Download Case Study
          </Button>
          
          <Button 
            onClick={onRoadmapClick}
            size="lg" 
            className="bg-[#0f172a] text-white hover:bg-[#1e293b] px-8 py-6 font-sora text-lg"
          >
            <File className="mr-2 h-5 w-5" />
            Download Roadmap
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
