
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project Overview
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 font-sora">About WEE2</h3>
                <p className="mb-6 text-gray-700">
                  WEE2 is a PR & Digital Marketing agency specializing in helping startups and small businesses establish their online presence. 
                  The brand needed to grow its Instagram following to attract more qualified leads and establish authority in the digital marketing space.
                </p>
                <p className="text-gray-700">
                  As the Social Media Manager and Digital Marketing Specialist, I was tasked with developing and implementing a comprehensive Instagram 
                  growth strategy that would significantly increase brand awareness and generate quality leads.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 font-sora">My Role & Tools</h3>
                <div className="mb-6">
                  <p className="font-semibold mb-2 text-gray-800">Role:</p>
                  <p className="text-gray-700">Strategy, Content Creation, Paid Ads, Analytics</p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-gray-800">Tools Used:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">Canva</span>
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">CapCut</span>
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">Meta Ads</span>
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">Google Analytics</span>
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">Hootsuite</span>
                    <span className="bg-[#2563eb] text-white rounded-full px-4 py-1 text-sm">Sprout Social</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
