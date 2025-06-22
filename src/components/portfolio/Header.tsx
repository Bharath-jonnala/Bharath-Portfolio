
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#64FFDA]">
            J.M.B.C
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="text-gray-300 hover:text-[#64FFDA] transition-colors relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64FFDA] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/assets/resume.pdf"
              download="Bharath_Chandra_Resume.pdf"
              size="sm" 
              className="border-[#64FFDA] text-[#64FFDA]  flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#64FFDA]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 glass-dark rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 p-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-left text-gray-300 hover:text-[#64FFDA] transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] flex items-center gap-2 w-fit"
              >
                <Download size={16} />
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
