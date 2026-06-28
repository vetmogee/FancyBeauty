import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../ui/dropdown-menu';
import React, { useEffect, useRef, useState } from 'react';
import fancylogolong from '../../assets/fancylogolong.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const handleNav = (section: string) => {
    if (location.pathname === '/agb') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  const isActive = (section: string) => activeSection === section;

  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'book', label: t('nav_book') },
    { id: 'services', label: t('nav_services') },
    { id: 'pricelist', label: t('nav_pricelist') },
    { id: 'gallery', label: t('nav_gallery') },
    { id: 'reviews', label: t('nav_reviews') },
    { id: 'contact', label: t('nav_contact') },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            background-color: rgba(250, 247, 243, 0.97) !important;
            backdrop-filter: blur(8px) !important;
          }
          [data-radix-popper-content-wrapper] > div [role="menuitem"],
          [data-radix-popper-content-wrapper] > div button[role="menuitem"] {
            color: #7A5F06 !important;
            font-weight: 600 !important;
            font-family: 'Raleway', sans-serif !important;
            letter-spacing: 0.15em !important;
            text-transform: uppercase !important;
            font-size: 0.75rem !important;
          }
          [data-radix-popper-content-wrapper] > div [role="menuitem"]:hover,
          [data-radix-popper-content-wrapper] > div button[role="menuitem"]:hover {
            background-color: rgba(122, 95, 6, 0.08) !important;
            color: #7A5F06 !important;
          }
        }
        [data-radix-popper-content-wrapper] > div[data-state="open"] {
          animation: slideDown 0.2s ease-out !important;
        }
        [data-radix-popper-content-wrapper] > div[data-state="closed"] {
          animation: slideUp 0.15s ease-in !important;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const style = document.getElementById(styleId);
      if (style) style.remove();
    };
  }, []);

  return (
    <nav
      className="fixed top-0 w-full bg-[#FAF7F3]/95 backdrop-blur-md z-50 border-b border-gold-400/50 transition-all duration-300"
      style={{ height: '75px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo */}
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
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 text-sm font-raleway font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${
                  isActive(item.id)
                    ? 'text-gold-700 border-b border-gold-700'
                    : 'text-stone-700 hover:text-gold-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/agb')}
              className="px-4 py-2 text-sm font-raleway font-semibold tracking-[0.18em] uppercase transition-all duration-200 text-stone-700 hover:text-gold-700"
            >
              AGB
            </button>
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center" ref={langRef}>
            <div className="flex items-center gap-0 border border-gold-700">
              <button
                onClick={() => { i18n.changeLanguage('en'); setIsLangOpen(false); }}
                aria-label="Switch to English"
                className={`px-3 py-1 text-xs font-raleway font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  i18n.language.startsWith('en')
                    ? 'bg-gold-700 text-white'
                    : 'text-gold-700 hover:bg-gold-50'
                }`}
              >
                EN
              </button>
              <div className="w-px h-4 bg-gold-700" />
              <button
                onClick={() => { i18n.changeLanguage('de'); setIsLangOpen(false); }}
                aria-label="Switch to German"
                className={`px-3 py-1 text-xs font-raleway font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  i18n.language.startsWith('de')
                    ? 'bg-gold-700 text-white'
                    : 'text-gold-700 hover:bg-gold-50'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none" aria-label="Open menu">
                  <Menu className="h-5 w-5 text-gold-700" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={20}
                className="z-[9999] lg:max-w-none lg:rounded-md rounded-none border-x-0 lg:border-x border-gold-200"
              >
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onSelect={() => handleNav(item.id)}
                    className="py-3 text-center justify-center text-gold-700"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem
                  onSelect={() => navigate('/agb')}
                  className="py-3 text-center justify-center text-gold-700"
                >
                  AGB
                </DropdownMenuItem>

                {/* Mobile Language Switcher */}
                <div className="py-4 flex justify-center border-t border-gold-100 mt-1">
                  <div className="flex items-center gap-0 border border-gold-700">
                    <button
                      onClick={() => i18n.changeLanguage('en')}
                      aria-label="Switch to English"
                      className={`px-4 py-1 text-xs font-raleway font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                        i18n.language.startsWith('en')
                          ? 'bg-gold-700 text-white'
                          : 'text-gold-700 hover:bg-gold-50'
                      }`}
                    >
                      EN
                    </button>
                    <div className="w-px h-4 bg-gold-700" />
                    <button
                      onClick={() => i18n.changeLanguage('de')}
                      aria-label="Switch to German"
                      className={`px-4 py-1 text-xs font-raleway font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                        i18n.language.startsWith('de')
                          ? 'bg-gold-700 text-white'
                          : 'text-gold-700 hover:bg-gold-50'
                      }`}
                    >
                      DE
                    </button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
