import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../UI/SectionHeading";
import { ExternalLink, Github, Code2, Globe, Bot } from "lucide-react";
const projects = [
  {
    title: "Professional Portfolio Website",
    category: " Full Stack Application",
    description:
      "A modern developer portfolio built with React, Express, PostgreSQL, and Prisma featuring a contact management system and admin dashboard for handling client enquiries.",
    tech: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Framer Motion",
      "Tailwind CSS",
    ],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-cyan-500/20",
    link: "#",
    github: "https://github.com/Manibharathi-ig/bharathi-portfolio",
  },
  {
    title: "WordPress Business Website",
    category: "Client / Freelance Website",
    description:
      "Developed and customized a business website using WordPress, including theme customization, responsive design, hosting configuration, and deployment.",
    tech: ["Wordpress", "HTML", "CSS", "Elementor" , "Responsive Design" , "Hosting" , "DNS"],
    icon: <Globe className="w-6 h-6" />,
    color: "from-purple-500/20",
    link: "https://www.sculptacademy.in/",
    // github: "#",
  },
  {
    title: "Coming Soon: AI Project Requirement Analyzer",
    category: "AI-Powered Full Stack Application",
    description:
      "An AI-powered platform that transforms business requirements into technical specifications, development roadmaps, database schemas, and project plans.",
    tech: ["Next.js", "Node.js", "Postgresql", "Express.js"],
    icon: <Bot className="w-6 h-6" />,
    color: "from-blue-500/20",
    link: "#",
    github: "#",
  },
];
export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Work"
          subtitle="Showcasing production-ready applications, freelance success stories, and AI-driven experiments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Abstract Image Placeholder / Header */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${project.color} to-black/50 relative overflow-hidden border-b border-white/5`}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-zinc-300">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-white group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center p-2.5 rounded-lg glass-card hover:bg-white/10 transition-colors text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 glass-card rounded-2xl p-6 text-center"
      >
        <h3 className="text-lg font-semibold text-white mb-3">
          Additional Professional Experience
        </h3>

        <p className="text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Delivered and maintained{" "}
          <span className="text-cyan-400 font-semibold">
            6+ client websites
          </span>{" "}
          across WordPress, WooCommerce, OpenCart, and Odoo platforms. Designed
          and implemented website layouts, responsive user interfaces, and
          business-focused web experiences from client requirements. Contributed
          to theme customization, hosting & deployment, domain management, and
          ongoing website maintenance using Hostinger, MilesWeb, and GoDaddy
          while collaborating directly with clients.
        </p>
      </motion.div>
    </section>
  );
};
