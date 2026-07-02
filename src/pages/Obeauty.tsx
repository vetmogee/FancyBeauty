
import ObeatPL from '../components/sections/obeat_pl';
import Navbar from '../components/sections/navbar';
import Home from '../components/sections/home';
import Services from '../components/sections/services';
import Gallery from '../components/sections/gallery';
import Reviews from '../components/sections/reviews';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';
import Book from '../components/sections/book';
import { useSectionTracking } from '../hooks/useSectionTracking';
import { useTranslation } from 'react-i18next';

const Obeauty = () => {
    const { t } = useTranslation();

    const sectionIds = [
        'home',
        'book',
        'services',
        'pricelist',
        'gallery',
        'reviews',
        'contact',
    ];

    const { activeSection, scrollToSection, isScrolling } = useSectionTracking(sectionIds, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.5,
        scrollOffset: 100,
        debounceMs: 50,
    });

    const handlePriceListSectionClick = () => {
        scrollToSection('pricelist');
    };

    return (
        <div className="min-h-screen bg-marble">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Navbar
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                handlePriceListSectionClick={handlePriceListSectionClick}
                activePriceList={'schlieren'}
                handlePriceListClick={() => {}}
                isScrolling={isScrolling}
            />

            <main id="main-content">
                <Home location="schlieren" />
                <Book location="schlieren" />
                <Services />

                <section id="pricelist" aria-labelledby="pricelist-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 id="pricelist-title" className="text-5xl text-stone-800 mb-3 tracking-wide">{t('price_list_title')}</h2>
                            <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
                            <p className="text-stone-600 font-raleway font-light tracking-wider text-sm uppercase">{t('price_list_subtitle')}</p>
                        </div>

                        <ObeatPL />
                    </div>
                </section>

                <Gallery location="schlieren" />
                <Reviews />
                <Contact location="schlieren" />
            </main>
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default Obeauty;
