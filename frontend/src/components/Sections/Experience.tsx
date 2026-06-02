import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../UI/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";
const timeline = [
  {
    role: "Web Developer Intern",
    company: "Xplore Intellects",
    period: "Nov 2024 - May 2025",
    description:
      "Worked on real-world client websites using WordPress and WooCommerce. Handled theme customization, responsive design, hosting setup, DNS management, website migrations, and client requirements.",
    icon: <Briefcase className="w-5 h-5" />,
  },

  {
    role: "Web Developer",
    company: "Xplore Intellects",
    period: "Jun 2025 - Mar 2026",
    description:
      "Promoted to full-time Web Developer. Delivered business websites, collaborated with clients, worked on deployment workflows, hosting infrastructure, and expanded into React, Next.js, Express, and full stack development.",
    icon: <Briefcase className="w-5 h-5" />,
  },

  {
    role: "AI & Full Stack Development",
    company: "Personal Projects & Continuous Learning",
    period: "2026 - Present",
    description:
      "Building modern full stack applications using React, Next.js, Express, PostgreSQL, and AI integrations. Currently expanding expertise through Python, Data Science, Machine Learning, and AI-powered software development.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];
export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading
          title="Professional Experience"
          subtitle="From web development and client projects to modern full stack and AI-powered applications."
        />

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="relative pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-1 w-14 h-14 rounded-full glass-card flex items-center justify-center text-cyan-400 border-cyan-500/30 z-10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  {item.icon}
                </div>

                <div className="glass-card p-8 rounded-2xl glass-card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <span className="text-cyan-400 font-medium text-sm">
                        {item.company}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 border border-white/10 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
