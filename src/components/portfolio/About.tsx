
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Lakkireddy Balireddy College of Engineering (JNTUK)",
      period: "2022–2026",
      percentage: "89%",
      status: "current"
    },
    {
      degree: "Intermediate (BIEAP)",
      institution: "Sri Chaitanya Junior College, Vijayawada",
      period: "2022",
      percentage: "96%",
      status: "completed"
    },
    {
      degree: "SSC (Class X)",
      institution: "St. Mary's EM High School",
      period: "2020",
      percentage: "97%",
      status: "completed"
    }
  ];

  const hobbies = ["Travel", "Cricket", "Technology Exploration"];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#64FFDA] to-[#4ECDC4] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-dark p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#64FFDA] to-[#4ECDC4] rounded-full flex items-center justify-center">
                  <User className="text-[#0A192F]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Story</h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A driven B.Tech Computer Science student at LBRCE (JNTUK) with an 89% academic record. 
                Passionate about web development, cloud technologies, and programming. Energetic learner 
                with strong teamwork and problem-solving skills.
              </p>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin size={18} className="text-[#64FFDA]" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
              
              <div className="glass p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#64FFDA] rounded-full"></span>
                  Hobbies & Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-[#64FFDA]/20 text-[#64FFDA] rounded-full text-sm border border-[#64FFDA]/30"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education Timeline</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`glass-dark border-l-4 ${
                    edu.status === 'current' 
                      ? 'border-l-[#64FFDA] shadow-lg shadow-[#64FFDA]/20' 
                      : 'border-l-gray-500'
                  } transition-all duration-300 hover:shadow-xl group`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-white group-hover:text-[#64FFDA] transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'current'
                            ? 'bg-[#64FFDA]/20 text-[#64FFDA] border border-[#64FFDA]/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {edu.percentage}
                        </span>
                        {edu.status === 'current' && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
