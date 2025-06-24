import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterWords = [
    "Computer Science Student",
    "Web Development Enthusiast", 
    "Cloud Technology Explorer",
    "Problem Solver"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <FloatingShapes />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image - Moved up and slightly larger */}
          <div className="w-72 h-72 md:w-88 md:h-88 mx-auto mb-8 -mt-0 relative">
            <div className="w-full h-full bg-gradient-to-br from-[#64FFDA] to-[#4ECDC4] rounded-full flex items-center justify-center overflow-hidden animate-glow">
              <img 
                src="/Bharath-Portfolio/profile.jpg" 
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Bharath Chandra</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-20 flex items-center justify-center">
            <TypewriterEffect words={typewriterWords} className="text-[#64FFDA]" />
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and exploring cloud technologies. 
            Currently pursuing B.Tech in Computer Science with a focus on modern development practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-[#64FFDA] hover:bg-[#4ECDC4] text-[#0A192F] font-semibold px-8 py-4 btn-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <a 
            href="/public/assets/resume.pdf"
            download="Bharath_Chandra_Resume.pdf"
              className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-4 flex items-center gap-2"
            >
              <Download size={20} />
              
              Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="mailto:jonnalamohanbharathchandra@gmail.com" 
              className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-[#64FFDA] hover:text-white hover:bg-[#64FFDA]/20 transition-all duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bharath-jonnala/" 
              className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-[#64FFDA] hover:text-white hover:bg-[#64FFDA]/20 transition-all duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/Bharath-jonnala" 
              className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-[#64FFDA] hover:text-white hover:bg-[#64FFDA]/20 transition-all duration-300 group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[#64FFDA] hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;