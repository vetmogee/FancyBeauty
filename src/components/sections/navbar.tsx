import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../ui/dropdown-menu';
import React, { useEffect, useState, useRef } from 'react';
import fancylogolong from '../../assets/fancylogolong.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  // Helper for nav buttons: if on /abg, navigate home and pass section; else, scroll
  const handleNav = (section: string) => {
    if (location.pathname === '/abg') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to check if a section is active
  const isActive = (section: string) => activeSection === section;

  // Navigation items configuration
  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'book', label: t('nav_book') },
    { id: 'services', label: t('nav_services') },
    { id: 'pricelist', label: t('nav_pricelist') },
    { id: 'gallery', label: t('nav_gallery') },
    { id: 'reviews', label: t('nav_reviews') },
    { id: 'contact', label: t('nav_contact') },
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
        <div className="flex justify-between items-center h-full w-full">
          {/* Logo - Left Corner */}
          <div className="flex-none w-32 lg:w-48 flex justify-start">
            <button onClick={() => navigate('/')} className="focus:outline-none flex-shrink-0">
              <img
                src={fancylogolong}
                alt="FancyBeauty Logo"
                className="h-14 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex grow justify-center items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.id)
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
                {t('nav_abg')}
              </button>
            </div>
          </div>

          {/* Right Side Elements */}
          <div className="flex-none w-32 lg:w-48 flex justify-end items-center">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center relative mr-auto" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="px-3 py-1 rounded-full text-sm font-semibold border-2 border-pink-300 text-pink-600 hover:bg-pink-50 transition-colors focus:outline-none flex items-center gap-1 min-w-[50px] justify-center"
              >
                {i18n.language.startsWith('en') ? 'EN' : 'DE'}
                <svg className={`w-3 h-3 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 w-20 bg-white rounded-md shadow-lg border border-pink-100 z-[100] transform transition-all duration-200 origin-top-right">
                  <button
                    onClick={() => { i18n.changeLanguage('en'); setIsLangDropdownOpen(false); }}
                    className={`w-full text-center px-4 py-2 text-sm transition-colors hover:bg-pink-50 ${i18n.language.startsWith('en') ? 'text-pink-600 font-bold' : 'text-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage('de'); setIsLangDropdownOpen(false); }}
                    className={`w-full text-center px-4 py-2 text-sm transition-colors hover:bg-pink-50 ${i18n.language.startsWith('de') ? 'text-pink-600 font-bold' : 'text-gray-700'}`}
                  >
                    DE
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu - Right Corner */}
            <div className="block lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none" aria-label="Open menu">
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
                    {t('nav_abg')}
                  </DropdownMenuItem>

                  {/* Mobile Language Switcher */}
                  <div className="py-4 flex justify-center space-x-4 border-t border-pink-100 mt-2">
                    <button
                      onClick={() => i18n.changeLanguage('en')}
                      className={`px-4 py-1 rounded-full text-sm font-bold border-2 border-pink-300 transition-colors ${i18n.language.startsWith('en') ? 'bg-pink-100 text-pink-700' : 'text-pink-600 hover:bg-pink-50'
                        }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => i18n.changeLanguage('de')}
                      className={`px-4 py-1 rounded-full text-sm font-bold border-2 border-pink-300 transition-colors ${i18n.language.startsWith('de') ? 'bg-pink-100 text-pink-700' : 'text-pink-600 hover:bg-pink-50'
                        }`}
                    >
                      DE
                    </button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;