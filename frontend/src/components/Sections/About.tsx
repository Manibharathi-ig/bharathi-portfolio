import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../UI/SectionHeading'
import { Code2, BrainCircuit, Server, Rocket } from 'lucide-react'
const highlights = [
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    title: 'Modern Stack',
    desc: 'Building with React, Next.js, and TypeScript for robust frontends.',
  },
  {
    icon: <Server className="w-6 h-6 text-blue-400" />,
    title: 'Scalable Systems',
    desc: 'Designing APIs and databases with Node.js, PostgreSQL, and Prisma.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    title: 'Production Ready',
    desc: 'Experience with hosting, DNS, domain migration, and deployment.',
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
    title: 'AI Focused',
    desc: 'Transitioning into Python, Machine Learning, and AI applications.',
  },
]
export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Engineering the Future"
          subtitle="A blend of real-world production experience and a relentless drive toward AI-driven development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
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
            }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              With over{' '}
              <strong className="text-white">
                1.5 years of real-world development experience
              </strong>
              , I've built and deployed numerous projects ranging from complex
              WordPress ecosystems to modern Next.js applications.
            </p>
            <p>
              My engineering philosophy centers around building scalable,
              maintainable systems. I don't just write code; I handle the entire
              lifecycle from architecture and database design to{' '}
              <strong className="text-white">
                hosting, DNS management, and production deployment
              </strong>
              .
            </p>
            <p>
              Currently, I am expanding my expertise into{' '}
              <strong className="text-cyan-400">
                Data Science and Artificial Intelligence
              </strong>
              . I believe the next generation of software will be deeply
              integrated with AI, and I am actively learning Python and Machine
              Learning to build smarter, data-driven applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
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
                className="glass-card p-6 rounded-2xl glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
