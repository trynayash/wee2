
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatProps {
  value: string;
  label: string;
  duration?: number;
  delay?: number;
}

const animateValue = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  let startTimestamp: number | null = null;
  
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    
    callback(current);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
};

const Stat = ({ value, label, duration = 2000, delay = 0 }: StatProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      // Parse the numeric part of the value
      let numericValue = 0;
      
      if (value.includes('K')) {
        numericValue = parseFloat(value) * 1000;
      } else if (value.includes('%')) {
        numericValue = parseFloat(value);
      } else {
        numericValue = parseFloat(value);
      }
      
      // Delay the animation
      const timer = setTimeout(() => {
        animateValue(0, numericValue, duration, (val) => {
          if (value.includes('K')) {
            setDisplayValue((val / 1000).toFixed(val < 1000 ? 1 : 0) + 'K+');
          } else if (value.includes('%')) {
            setDisplayValue(val.toString() + '%');
          } else {
            setDisplayValue(val.toString());
          }
        });
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, duration, delay]);

  return (
    <Card ref={ref} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2 font-sora">{displayValue}</div>
        <div className="text-gray-600 text-sm md:text-base">{label}</div>
      </CardContent>
    </Card>
  );
};

const Results = () => {
  const stats = [
    { value: "750", label: "New Followers" },
    { value: "45K", label: "Total Reach" },
    { value: "2.3K", label: "Post Interactions" },
    { value: "110", label: "Leads via DM" },
    { value: "220%", label: "Story Engagement" }
  ];

  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Campaign Results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Stat 
                value={stat.value} 
                label={stat.label} 
                delay={index * 200} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
