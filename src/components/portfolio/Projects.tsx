
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Users, Trophy, Code, ExternalLink, Calendar, Star } from 'lucide-react';

import portfolio from "@/assets/portfolio.png";
import chatapp from "@/assets/chatapp.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      category: "web",
      description: "Responsive personal portfolio built with React and Tailwind CSS,Includes smooth animations and responsive design.",
      tags: ["React", "Tailwind CSS", "Vite"],
      image: portfolio,
      demoLink: "https://bharathportfolio-18.vercel.app/",
      codeLink: "https://github.com/Bharath-jonnala/Bharath-Portfolio.git",
      status: "Completed"
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      category: "cloud",
      description: "Realtime chat application using React and Firebase with user auth and message storage.",
      tags: ["React", "Firebase", "Firestore", "Authentication"],
      image: chatapp,
      demoLink: "#",
      codeLink: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Ride Booking App",
      category: "ai",
      description: "Uber-style ride booking app built with React Native and Expo, featuring real-time location and map navigation.",
      tags: ["React Native", "Expo", "PostgreSQL", "Node.js", "Google Maps"],
      image: "/placeholder.svg",
      demoLink: "#",
      codeLink: "#",
      status: "In Progress"
    }

  ];

  const certifications = [
   {
  title: "EV - Programming and Problem Solving Using C",
  issuer: "E-Box (Amphisoft)",
  date: "Oct 2024 – Feb 2025",
  icon: Award,
  level: "Completion",
  skills: ["Loops and Conditionals", "Functions in C", "Problem Solving"],
  credentialId: "CDS-2024-001"
}
,
    {
  title: "MERN Stack Internship",
  issuer: "Biztron Softech",
  date: "24 June 2024 - 20 July 2024",
  icon: Award,
  level: "Internship",
  skills: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack Development"],
  credentialId: "INT-MERN-2024"
}
,
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: Award,
      level: "Foundational",
      skills: ["Cloud Computing", "AWS Services", "Architecture"],
      credentialId: "AWS-CP-2024"
    }
  ];

  const achievements = [
    {
      title: "Web Development Training",
      category: "Training",
      icon: BookOpen,
      description: "Intensive 6-week program covering modern web technologies and industry best practices.",
      duration: "4 weeks",
      participants: "200+ participants"
    },

    {
      title: "NSS Volunteer",
      category: "Extracurricular",
      icon: Trophy,
      description: "Active community service member contributing to social initiatives and leadership development.",
      duration: "Ongoing",
      participants: "100+ volunteers"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Projects' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 ">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my technical projects, certifications, and professional development journey
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 lg:mb-0">Featured Projects</h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === option.value
                      ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg'
                      : 'glass-dark text-gray-300 hover:text-white border border-gray-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-teal-500/20 text-teal-400 rounded-full border border-teal-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
                    >
                      <Code size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Certifications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="glass-dark rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group border border-gray-700/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {cert.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 mb-4">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                    <Calendar size={16} className="text-teal-400" />
                    {cert.date}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Training & Activities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="glass-dark rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group border border-gray-700/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {achievement.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Star size={16} className="text-teal-400" />
                      {achievement.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-teal-400" />
                      {achievement.participants}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
