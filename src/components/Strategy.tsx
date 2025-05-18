
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const strategies = [
  {
    title: "Content Calendar",
    description: "Implemented a structured content calendar with 5 posts per week, balanced across educational, promotional, and engagement content."
  },
  {
    title: "Reels Strategy",
    description: "Created short-form video content using trending audio and topics, optimized for the Instagram algorithm to maximize organic reach."
  },
  {
    title: "Hashtag Strategy",
    description: "Developed a combination of branded hashtags and trending industry hashtags to improve discoverability and reach."
  },
  {
    title: "Paid Advertising",
    description: "Implemented targeted Instagram ads with strategic CTA buttons (Send Message, Learn More) to drive qualified traffic and generate leads."
  },
  {
    title: "Analytics & Optimization",
    description: "Established a weekly review cycle to analyze performance metrics and refine strategy based on data-driven insights."
  }
];

const Strategy = () => {
  return (
    <section id="strategy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Strategy Breakdown
        </motion.h2>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {strategies.map((strategy, index) => (
            <div key={index} className="mb-12 relative" style={{ zIndex: 10 - index }}>
              <motion.div
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'} relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute w-4 h-4 rounded-full bg-blue-500 top-6 transform -translate-y-1/2 
                  shadow-md z-10 border-2 border-white
                  ${index % 2 === 0 ? 'right-[-8px] translate-x-1/2' : 'left-[-8px] -translate-x-1/2'}">
                </div>
                
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-sora text-[#2563eb]">{strategy.title}</h3>
                    <p className="text-gray-700">{strategy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
