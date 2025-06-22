
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="floating-shape top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg animate-float opacity-20"></div>
      <div className="floating-shape top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-15" style={{ animationDelay: '2s' }}></div>
      <div className="floating-shape bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 transform rotate-45 animate-float opacity-10" style={{ animationDelay: '4s' }}></div>
      <div className="floating-shape bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg animate-float opacity-25" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default FloatingShapes;
