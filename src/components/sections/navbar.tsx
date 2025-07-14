import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../ui/dropdown-menu';
import React from 'react';
import fancylogo from '../../assets/fancylogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  handlePriceListSectionClick: () => void;
  activePriceList: 'schlieren' | 'zurich';
  handlePriceListClick: (location: 'schlieren' | 'zurich') => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollToSection,
  handlePriceListSectionClick,
  activePriceList,
  handlePriceListClick
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Helper for nav buttons: if on /abg, navigate home and pass section; else, scroll
  const handleNav = (section: string) => {
    if (location.pathname === '/abg') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-pink-100" style={{ height: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <img 
              src={fancylogo} 
              alt="FancyBeauty Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'services'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNav(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {section}
                </button>
              ))}
              
              {/* Price List Button */}
              <button
                onClick={() => handleNav('pricelist')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                  activeSection === 'pricelist'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Price List
              </button>
              {['gallery', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNav(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {section}
                </button> 
                
              ))}
              {/* ABG Page Button */}
              <button
                onClick={() => navigate('/abg')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize text-gray-700 hover:text-pink-600 hover:bg-pink-50`}
              >
                ABG
              </button>
            </div>
          </div>
          {/* Medium Screen Dropdown Nav */}
          <div className="block md:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-md focus:outline-none">
                  <Menu className="h-6 w-6 text-pink-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={20} className="z-[9999]">
                {['home', 'services'].map((section) => (
                  <DropdownMenuItem
                    key={section}
                    onSelect={() => handleNav(section)}
                    className={
                      activeSection === section
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : ''
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </DropdownMenuItem>
                ))}
                
                
                <DropdownMenuItem onSelect={() => handleNav('pricelist')}>
                  Price List
                </DropdownMenuItem>
                {['gallery', 'reviews', 'contact'].map((section) => (
                  <DropdownMenuItem
                    key={section}
                    onSelect={() => handleNav(section)}
                    className={
                      activeSection === section
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : ''
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </DropdownMenuItem> 
                ))}

                {/* ABG Page Dropdown Item */}
                  <DropdownMenuItem onSelect={() => navigate('/abg')}>
                  ABG
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 