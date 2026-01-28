import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../ui/dropdown-menu';
import React, { useEffect } from 'react';
import fancylogolong from '../../assets/fancylogolong.png';
import { useNavigate, useLocation } from 'react-router-dom';

// Define a single gradient value for navbar active states
const NAVBAR_GRADIENT = 'bg-gradient-to-r from-rose-500 to-pink-200 text-white';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  handlePriceListSectionClick: () => void;
  activePriceList: 'schlieren' | 'zurich';
  handlePriceListClick: (location: 'schlieren' | 'zurich') => void;
  isScrolling?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollToSection,
  handlePriceListSectionClick,
  activePriceList,
  handlePriceListClick,
  isScrolling = false
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
  
  // Helper to check if a section is active
  const isActive = (section: string) => activeSection === section;
  
  // Navigation items configuration
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'book', label: 'Book' },
    { id: 'services', label: 'Services' },
    { id: 'pricelist', label: 'Price List' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];
  
  // Make dropdown full width on mobile and style menu items with custom color
  useEffect(() => {
    const styleId = 'mobile-navbar-fullwidth';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (max-width: 1023px) {
          [data-radix-popper-content-wrapper] {
            width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            max-width: none !important;
          }
          [data-radix-popper-content-wrapper] > div {
            width: 100vw !important;
            border-left: none !important;
            border-right: none !important;
            border-radius: 0 !important;
            background-color: rgba(255, 255, 255, 0.80) !important;
            backdrop-filter: blur(8px) !important;
          }
          /* Style mobile menu items with custom color */
          [data-radix-popper-content-wrapper] > div [role="menuitem"],
          [data-radix-popper-content-wrapper] > div button[role="menuitem"] {
            color: #db2777 !important;
            font-weight: 500 !important;
          }
          [data-radix-popper-content-wrapper] > div [role="menuitem"]:hover,
          [data-radix-popper-content-wrapper] > div button[role="menuitem"]:hover {
            background-color: rgba(219, 39, 119, 0.15) !important;
            color: #db2777 !important;
          }
          [data-radix-popper-content-wrapper] > div [role="menuitem"]:focus,
          [data-radix-popper-content-wrapper] > div button[role="menuitem"]:focus {
            background-color: rgba(219, 39, 119, 0.15) !important;
            color: #db2777 !important;
          }
          [data-radix-popper-content-wrapper] > div [role="menuitem"]:active,
          [data-radix-popper-content-wrapper] > div button[role="menuitem"]:active {
            background-color: rgba(219, 39, 119, 0.2) !important;
            color: #db2777 !important;
          }
        }
        /* Override zoom animations with slide-down animation */
        [data-radix-popper-content-wrapper] > div[data-state="open"] {
          animation: slideDown 0.2s ease-out !important;
        }
        [data-radix-popper-content-wrapper] > div[data-state="closed"] {
          animation: slideUp 0.15s ease-in !important;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);
  return (
    <nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50 border-b border-pink-100 transition-all duration-300 ${isScrolling ? 'shadow-xl' : ''}`} style={{ height: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Left Corner */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate('/')} className="focus:outline-none">
              <img 
                src={fancylogolong} 
                alt="FancyBeauty Logo" 
                className="h-14 w-auto object-contain"
              />
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.id)
                      ? NAVBAR_GRADIENT
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* ABG Page Button */}
              <button
                onClick={() => navigate('/abg')}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              >
                ABG
              </button>
            </div>
          </div>
          
          {/* Mobile Hamburger Menu - Right Corner */}
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="  focus:outline-none" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-pink-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                sideOffset={20} 
                className="z-[9999] lg:max-w-none lg:rounded-md rounded-none border-x-0 lg:border-x"
              >
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onSelect={() => handleNav(item.id)}
                    className="lg:data-[state=checked]:bg-gradient-to-r lg:data-[state=checked]:from-rose-500 lg:data-[state=checked]:to-pink-200 lg:data-[state=checked]:text-white py-2 text-center justify-center text-pink-600"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
                {/* ABG Page Dropdown Item */}
                <DropdownMenuItem 
                  onSelect={() => navigate('/abg')}
                  className="py-2 text-center justify-center text-pink-600"
                >
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