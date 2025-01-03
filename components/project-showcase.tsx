import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Three Body Simulation',
    description: 'C++, IMGUI, OpenGL, GLSL, GLM, GLFW, GLAD, 3d modeling project',
    image: '/assets/three-body-sim-pic.png',
    link: 'https://github.com/ericlivshiz/ThreeBodySim'
  },
  {
    title: 'Automata Trading',
    description: 'Real-Time, Collaborative, Workflow Automation for Trading',
    image: '/assets/automata-trading-pic.png',
    link: 'https://automata-trading.vercel.app/'
  },
  {
    title: '3D Graphics Programming',
    description: 'OpenGL, GLSL, GLM, GLFW, GLAD, 3D graphics project',
    image: '/assets/opengl-pic.png',
    link: 'https://github.com/ericlivshiz/OpenGL1.1'
  },
  {
    title: 'Verlet Solver',
    description: 'Real-TimeVerlet Physics Solver using C++ and SFML',
    image: '/assets/verlet-solver-pic.png',
    link: 'https://github.com/ericlivshiz/VerletSolver'
  },
  {
    title: 'Find Your Homie',
    description: 'Housing, Subleasing, and Roommate Matching Platform',
    image: '/assets/find-your-homie-pic.png',
    link: 'https://find-your-homie.vercel.app/'
  }
]

export default function ProjectShowcase() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} className="group">
            <div className="bg-slate-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
