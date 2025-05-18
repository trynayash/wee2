
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonial
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gray-50 shadow-lg border-0">
            <CardContent className="p-8 md:p-10 relative">
              <div className="text-[#2563eb] text-6xl opacity-20 font-serif absolute top-4 left-4">"</div>
              <p className="text-lg md:text-xl mb-8 relative z-10 text-gray-700 italic">
                "Yash's Instagram strategy completely transformed our digital presence. Not only did we see significant 
                growth in followers, but the quality of leads coming through our DMs has been exceptional. His approach 
                to content strategy and paid advertising delivered results that exceeded our expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-sora font-bold text-lg">
                  WE
                </div>
                <div>
                  <p className="font-semibold font-sora">Rouchelle Dabrel</p>
                  <p className="text-gray-600 text-sm">CEO, WEE2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
