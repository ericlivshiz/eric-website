import Hero from '@/components/hero'
import ProjectShowcase from '@/components/project-showcase'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <ProjectShowcase />
      <Contact />
    </main>
  )
}
