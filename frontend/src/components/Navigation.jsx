import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Executive Summary', path: '/executive-summary' },
    { name: 'Problem Context', path: '/problem-context' },
    { name: 'Research', path: '/research' },
    { name: 'Solution', path: '/solution' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Ethics', path: '/ethics' },
    { name: 'Outcomes', path: '/outcomes' },
    { name: 'Next Steps', path: '/next-steps' },
    { name: 'Lessons Learned', path: '/lessons' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NT</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Nexline Twin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 7).map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`text-sm ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-sm text-slate-300 hover:text-white hover:bg-slate-800"
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(7).map((item) => (
                  <Link key={item.path} to={item.path}>
                    <div
                      className={`px-4 py-2 text-sm hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg ${
                        isActive(item.path) ? 'text-cyan-400 bg-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;