import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
        Eric Livshiz
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Software Engineer | Data Scientist
      </p>
      <div className="flex space-x-4">
        <Link href="https://github.com/ericlivshiz" className="text-slate-300 hover:text-indigo-400 transition-colors">
          <Github size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/eric-livshiz-b46956247" className="text-slate-300 hover:text-indigo-400 transition-colors">
          <Linkedin size={24} />
        </Link>
      </div>
    </section>
  )
}