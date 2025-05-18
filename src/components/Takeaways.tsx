
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const takeaways = [
  {
    number: "01",
    title: "Reels Triggered Virality",
    description: "Reels consistently outperformed static posts, with a particular spike in reach when aligned with trending audio. This format was pivotal in reaching new audiences and driving overall account growth."
  },
  {
    number: "02",
    title: "Carousel + CTA = Lead Magnet",
    description: "Carousel posts with educational content and a clear call-to-action generated the highest number of direct message inquiries, proving to be the most effective format for lead generation."
  },
  {
    number: "03",
    title: "Consistency Drove Engagement",
    description: "The consistent posting schedule of 5 posts per week created a predictable pattern for followers, resulting in increased engagement rates and higher retention of new followers."
  }
];

const Takeaways = () => {
  return (
    <section id="takeaways" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Key Takeaways
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {takeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-[#2563eb] mb-4 font-sora">{takeaway.number}</div>
                  <h3 className="text-xl font-semibold mb-3 font-sora">{takeaway.title}</h3>
                  <p className="text-gray-600">{takeaway.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
