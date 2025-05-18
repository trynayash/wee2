
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, Users, Palette, BarChart3
} from "lucide-react";

const objectives = [
  {
    icon: <TrendingUp className="h-12 w-12 text-[#2563eb]" />,
    title: "Grow Reach by 200%",
    description: "Increase audience reach through organic and paid strategies"
  },
  {
    icon: <Users className="h-12 w-12 text-[#2563eb]" />,
    title: "Generate Qualified Leads",
    description: "Increase direct messages from potential clients"
  },
  {
    icon: <Palette className="h-12 w-12 text-[#2563eb]" />,
    title: "Build Visual Branding",
    description: "Establish a consistent and recognizable visual identity"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-[#2563eb]" />,
    title: "Improve Engagement",
    description: "Increase likes, comments, shares, and saves"
  }
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-sora"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Campaign Objectives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-blue-50 p-4 inline-flex">
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-sora">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
