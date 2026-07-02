import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAgbReturnPath } from '../../lib/agbReturn';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNav = (section: string) => {
    if (location.pathname === '/agb') {
      const returnPath = getAgbReturnPath((location.state as { from?: string } | null)?.from);
      navigate(returnPath, { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  const goToAgb = () => navigate('/agb', { state: { from: location.pathname } });

  const links = [
    { id: 'services', label: t('nav_services') },
    { id: 'pricelist', label: t('nav_pricelist') },
    { id: 'gallery', label: t('nav_gallery') },
    { id: 'reviews', label: t('nav_reviews') },
    { id: 'contact', label: t('nav_contact') },
    { id: 'book', label: t('nav_book') },
  ];

  return (
    <footer className="bg-[#1C1714] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="block w-8 h-px bg-gold-400 mb-5"></span>
            <h3 className="text-3xl text-white mb-4 tracking-wide">FancyBeauty</h3>
            <p className="text-stone-400 font-raleway font-semibold leading-relaxed text-sm">
              {t('footer_tagline')}
            </p>
          </div>

          <div>
            <span className="block w-8 h-px bg-gold-400 mb-5"></span>
            <h4 className="text-gold-400 font-raleway font-semibold tracking-[0.2em] uppercase text-xs mb-5">{t('footer_quick_links')}</h4>
            <div className="space-y-3 text-stone-400 font-raleway font-semibold">
              {links.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="block hover:text-pink-400 transition-colors duration-200 text-sm tracking-wide"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={goToAgb}
                className="block hover:text-pink-400 transition-colors duration-200 text-sm tracking-wide"
              >
                AGB
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-700 text-center">
          <p className="text-stone-400 font-raleway font-semibold text-xs tracking-wider">
            {t('footer_copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
