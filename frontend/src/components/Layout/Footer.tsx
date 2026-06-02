import React from 'react'
import { Terminal } from 'lucide-react'
export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="font-bold text-lg tracking-wider text-white">
            BHARATHI<span className="text-cyan-400">.DEV</span>
          </span>
        </div>

        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Bharathi. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
