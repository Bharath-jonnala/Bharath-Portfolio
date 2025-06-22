
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
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#4ECDC4] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powering innovation with modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div 
                key={skill.name}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-card-inner">
                  <div className="skill-icon-container">
                    <div className={`skill-icon bg-gradient-to-br ${skill.color}`}>
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="skill-content">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-category">{skill.category}</span>
                    
                    {/* Progress Ring */}
                    <div className="skill-progress">
                      <svg className="progress-ring" width="60" height="60">
                        <circle
                          className="progress-ring-circle-bg"
                          stroke="rgba(100, 255, 218, 0.1)"
                          strokeWidth="3"
                          fill="transparent"
                          r="26"
                          cx="30"
                          cy="30"
                        />
                        <circle
                          className="progress-ring-circle"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="transparent"
                          r="26"
                          cx="30"
                          cy="30"
                          strokeDasharray={`${2 * Math.PI * 26}`}
                          strokeDashoffset={`${2 * Math.PI * 26 * (1 - skill.level / 100)}`}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#64FFDA" />
                            <stop offset="100%" stopColor="#4ECDC4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="skill-hover-overlay"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
