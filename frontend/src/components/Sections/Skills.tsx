import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../UI/SectionHeading";
import {
  Layout,
  Database,
  Cloud,
  Cpu,
  MonitorSmartphone,
  Bot,
  Lightbulb,
} from "lucide-react";
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive Design",
    ],
    color: "from-cyan-500/20 to-transparent",
    borderColor: "group-hover:border-cyan-500/50",
  },
  {
    title: "Backend Engineering",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma ORM",
      "PostgreSQL",
      "MySQL",
      "Authentication",
    ],
    color: "from-blue-500/20 to-transparent",
    borderColor: "group-hover:border-blue-500/50",
  },

  {
    title: "CMS & E-Commerce",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      "WordPress",
      "WooCommerce",
      "Theme Customization",
      "Plugin Integration",
      'OpenCart',
      "Payment Gateway",
    ],
    color: "from-pink-500/20 to-transparent",
    borderColor: "group-hover:border-pink-500/50",
  },

  {
    title: "Infrastructure & Ops",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "Hosting & Deployment",
      "DNS & A Records",
      "Domain Migration",
      "cPanel Workflows",
      "Zoho Mail Setup",
    ],
    color: "from-purple-500/20 to-transparent",
    borderColor: "group-hover:border-purple-500/50",
  },

  {
    title: "AI & Emerging Technologies",
    icon: <Bot className="w-5 h-5" />,
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "AI Applications",
      "Prompt Engineering",
      "LLMs",
      "AI Agents",
    ],
    color: "from-emerald-500/20 to-transparent",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Problem Solving & Adaptability",
    icon: <Lightbulb className="w-5 h-5" />,
    skills: [
      "Rapid Learning",
      "Debugging",
      "Research",
      "System Thinking",
      "Client Requirements",
    ],
    color: "from-orange-500/20 to-transparent",
    borderColor: "group-hover:border-orange-500/50",
  },
];
export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="Technologies and professional skills gained through production projects, business websites, full stack development, and AI exploration."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`glass-card rounded-2xl p-8 group transition-all duration-500 ${category.borderColor}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/5 text-zinc-300 group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/5 text-zinc-400 group-hover:text-zinc-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
