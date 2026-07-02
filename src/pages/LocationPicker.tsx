import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fancylogolong from '../assets/fancylogolong.png';

const LocationPicker = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const choices = [
        { path: '/obeauty', titleKey: 'picker_choose_obeauty', descKey: 'picker_obeauty_desc' },
        { path: '/fancy', titleKey: 'picker_choose_fancy', descKey: 'picker_fancy_desc' },
        { path: '/home', titleKey: 'picker_choose_home', descKey: 'picker_home_desc' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF7F3] flex flex-col items-center justify-center px-4 py-16 relative">
            <div className="absolute top-6 right-6 flex items-center gap-0 border border-gold-700">
                <button
                    onClick={() => i18n.changeLanguage('en')}
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
                    onClick={() => i18n.changeLanguage('de')}
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

            <img src={fancylogolong} alt="FancyBeauty Logo" className="h-16 w-auto object-contain mb-10" />

            <h1 className="text-4xl text-stone-800 mb-3 tracking-wide text-center">{t('picker_title')}</h1>
            <span className="block w-16 h-px bg-gold-400 mb-4"></span>
            <p className="text-stone-600 font-raleway font-semibold tracking-wider text-sm uppercase mb-12 text-center">
                {t('picker_subtitle')}
            </p>

            <div className="grid sm:grid-cols-3 gap-6 w-full max-w-3xl">
                {choices.map((choice) => (
                    <button
                        key={choice.path}
                        onClick={() => navigate(choice.path)}
                        className="bg-white border border-stone-100 shadow-sm hover:shadow-md hover:border-gold-400 transition-all duration-300 p-10 text-center group"
                    >
                        <span className="block w-8 h-px bg-gold-400 mx-auto mb-5"></span>
                        <h2 className="text-2xl text-stone-800 mb-2 tracking-wide group-hover:text-gold-700 transition-colors">
                            {t(choice.titleKey)}
                        </h2>
                        <p className="text-stone-500 font-raleway font-semibold text-xs tracking-wider uppercase">
                            {t(choice.descKey)}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LocationPicker;
