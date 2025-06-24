import React from 'react';
import { Code, Cloud, Users, Lightbulb, Database, Globe, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: Code,
      color: "from-yellow-400 to-yellow-600",
      level: 85,
      category: "Programming"
    },
    {
      name: "Java",
      icon: Cpu,
      color: "from-orange-400 to-red-500",
      level: 80,
      category: "Programming"
    },
    {
      name: "C",
      icon: Code,
      color: "from-blue-400 to-blue-600",
      level: 75,
      category: "Programming"
    },
    {
      name: "React",
      icon: Zap,
      color: "from-cyan-400 to-blue-500",
      level: 90,
      category: "Web"
    },
    {
      name: "HTML/CSS",
      icon: Globe,
      color: "from-orange-400 to-pink-500",
      level: 95,
      category: "Web"
    },
    {
      name: "JavaScript",
      icon: Code,
      color: "from-yellow-300 to-yellow-500",
      level: 85,
      category: "Web"
    },
    {
      name: "Problem Solving",
      icon: Lightbulb,
      color: "from-pink-400 to-rose-500",
      level: 88,
      category: "Soft Skills"
    }
  ];

  return (
    <section id="skills" className="py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-[#64FFDA] to-[#4ECDC4] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#4ECDC4] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powering innovation with modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skill-card group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md border border-gray-700/30 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#64FFDA]/40"
                style={{ animationDelay: `${index * 0.1}s`, width: '180px', height: '200px' }}
              >
                <div className="skill-card-inner flex flex-col items-center text-center gap-2 h-full justify-center">
                  <div className="skill-icon-container flex-shrink-0">
                    <div className={`skill-icon w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="skill-content flex flex-col items-center gap-1 flex-grow">
                    <h3 className="skill-name text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#64FFDA]">
                      {skill.name}
                    </h3>
                    <span className="skill-category text-sm text-[#64FFDA] opacity-80 uppercase tracking-wide">
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="skill-hover-overlay absolute inset-0 bg-gradient-to-t from-[#64FFDA]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;