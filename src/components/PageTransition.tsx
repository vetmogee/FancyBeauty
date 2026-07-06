import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import fancylogolong from '../assets/fancylogolong.png';

type Phase = 'idle' | 'opening' | 'holding' | 'fading';

interface PageTransitionContextValue {
    transitionTo: (path: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export const useLocationTransition = () => {
    const ctx = useContext(PageTransitionContext);
    if (!ctx) throw new Error('useLocationTransition must be used within PageTransitionProvider');
    return ctx;
};

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [phase, setPhase] = useState<Phase>('idle');
    const [isSplitOpen, setIsSplitOpen] = useState(false);
    const pendingNavRef = useRef(false);

    const transitionTo = (path: string) => {
        setPhase('opening');
        setIsSplitOpen(false);
        pendingNavRef.current = true;
        // wait a frame so the panels paint closed before animating open
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsSplitOpen(true));
        });
        setTimeout(() => navigate(path), 900);
    };

    // once the destination route has actually mounted, hold briefly then fade out
    useEffect(() => {
        if (!pendingNavRef.current) return;
        pendingNavRef.current = false;
        setPhase('holding');
        const holdTimer = setTimeout(() => setPhase('fading'), 400);
        return () => clearTimeout(holdTimer);
    }, [location.pathname]);

    useEffect(() => {
        if (phase !== 'fading') return;
        const fadeTimer = setTimeout(() => {
            setPhase('idle');
            setIsSplitOpen(false);
        }, 500);
        return () => clearTimeout(fadeTimer);
    }, [phase]);

    return (
        <PageTransitionContext.Provider value={{ transitionTo }}>
            {children}
            {phase !== 'idle' && (
                <div
                    className={`fixed inset-0 z-[100] transition-opacity duration-500 ease-in-out ${
                        phase === 'fading' ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    <div className="absolute inset-0 bg-[#FAF7F3] flex flex-col items-center justify-center gap-5">
                        <img src={fancylogolong} alt="FancyBeauty Logo" className="h-12 w-auto object-contain animate-pulse" />
                        <div className="w-9 h-9 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                    </div>

                    <div
                        className={`absolute inset-x-0 top-0 h-1/2 bg-[#FAF7F3] border-b border-gold-400 transition-transform duration-700 ease-in-out ${
                            isSplitOpen ? '-translate-y-full' : 'translate-y-0'
                        }`}
                    />
                    <div
                        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#FAF7F3] border-t border-gold-400 transition-transform duration-700 ease-in-out ${
                            isSplitOpen ? 'translate-y-full' : 'translate-y-0'
                        }`}
                    />
                </div>
            )}
        </PageTransitionContext.Provider>
    );
};
