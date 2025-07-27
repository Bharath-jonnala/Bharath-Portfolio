
import React from 'react';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Cloud,
  Terminal,
  Layers,
  Zap,
  Settings,
  Flame,
  Squirrel,
  HardDrive,
  PackagePlus,
  Sparkles,
  Cpu,
  Atom // ⚠️ If not available, use a custom SVG or fallback to Code2 again
} from 'lucide-react';


const Skills = () => {
 const skillCategories = [
   {
  title: "Languages & Tools",
  icon: Settings,
  skills: [
    { name: "Java", icon: Flame, color: "from-orange-500 to-red-500" },     
    { name: "C", icon: Cpu, color: "from-slate-500 to-slate-700" },          
    { name: "Git", icon: GitBranch, color: "from-red-400 to-red-600" },
    { name: "GitHub", icon: Squirrel, color: "from-gray-700 to-black" }
  ]
},
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", icon: Atom, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", icon: Zap, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML5/CSS3", icon: Palette, color: "from-orange-400 to-red-500" },
      { name: "Tailwind CSS", icon: Layers, color: "from-cyan-400 to-cyan-600" }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Terminal, color: "from-green-400 to-green-600" },
      { name: "Firebase", icon: Flame, color: "from-yellow-500 to-orange-600" },
      { name: "Express.js", icon: Server, color: "from-gray-400 to-gray-600" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database, color: "from-green-500 to-emerald-600" },
      { name: "PostgreSQL", icon: HardDrive, color: "from-blue-600 to-indigo-600" },
      { name: "AWS", icon: Cloud, color: "from-orange-500 to-yellow-500" }
    ]
  },
 

];



  return (
    <section id="skills" className="py-20 ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expertise</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <category.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer group/skill"
                      style={{
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                      }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Skills;