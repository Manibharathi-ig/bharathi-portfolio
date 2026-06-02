import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../UI/SectionHeading";
import { Globe, Server, Wrench, Zap, PenTool } from "lucide-react";
const services = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable web applications using React, Next.js, Node.js, Express, PostgreSQL, and modern development practices.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "WordPress & E-Commerce",
    description:
      "Developing business websites using WordPress, WooCommerce, OpenCart, and Odoo with custom layouts and business-focused solutions.",
    icon: <Zap className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing responsive website layouts, user interfaces, and business websites from client requirements using modern design principles and Figma.",
    icon: <PenTool className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Hosting & Deployment",
    description:
      "Domain setup, DNS configuration, hosting management, website deployment, migrations, and email configuration using Hostinger, GoDaddy, and MilesWeb.",
    icon: <Server className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Requirements & Client Communication',
    description:
  'Gathering client requirements, proposing solutions, providing project updates, and delivering business-focused websites through effective communication and collaboration.',
    icon: <Wrench className="w-8 h-8 text-pink-400" />,
  },
];
export const Services: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Areas of Expertise"
          subtitle="Professional experience across full stack development, business websites, hosting infrastructure, and modern web technologies."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`glass-card p-8 rounded-2xl flex gap-6 group hover:border-cyan-500/30 transition-colors ${
                index === 4 ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
              }`}
            >
              <div className="flex-shrink-0 mt-1">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
