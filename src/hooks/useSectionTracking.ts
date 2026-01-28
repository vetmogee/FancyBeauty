import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SectionTrackingOptions {
  rootMargin?: string;
  threshold?: number | number[];
  scrollOffset?: number; // Offset from top for scroll detection
  debounceMs?: number;
  debug?: boolean;
}

const DEFAULT_OPTIONS: Required<SectionTrackingOptions> = {
  rootMargin: '-20% 0px -60% 0px', // Trigger when section is in middle 40% of viewport
  threshold: 0.5, // Section is active when 50% visible
  scrollOffset: 100, // Account for navbar height
  debounceMs: 50,
  debug: false,
};

export const useSectionTracking = (
  sectionIds: string[],
  options: SectionTrackingOptions = {}
) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');
  const [isScrolling, setIsScrolling] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const manualScrollRef = useRef<boolean>(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());
  
  const opts = { ...DEFAULT_OPTIONS, ...options };

  // Scroll to a specific section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      if (opts.debug) {
        console.warn(`Section "${sectionId}" not found`);
      }
      return;
    }
    
    // Mark as manual scroll to prevent observer from interfering
    manualScrollRef.current = true;
    setActiveSection(sectionId);
    
    // Calculate scroll position accounting for navbar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - opts.scrollOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    
    // Reset manual scroll flag after animation completes
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = setTimeout(() => {
      manualScrollRef.current = false;
    }, 1000);
  }, [opts.scrollOffset, opts.debug]);

  // Find active section based on scroll position (fallback method)
  const findActiveSectionByScroll = useCallback((): string => {
    const scrollY = window.scrollY + opts.scrollOffset;
    const windowHeight = window.innerHeight;
    
    // If at the very top, return first section
    if (scrollY < 200) {
      return sectionIds[0] || 'home';
    }
    
    let bestSection = sectionIds[0] || 'home';
    let bestDistance = Infinity;
    
    // Find the section closest to the top of the viewport
    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;
      
      // Check if section is in viewport
      if (elementTop <= scrollY && elementBottom >= scrollY - windowHeight) {
        const distance = Math.abs(elementTop - (scrollY - opts.scrollOffset));
        
        // Prefer sections that are closer to the top
        if (distance < bestDistance) {
          bestDistance = distance;
          bestSection = sectionId;
        }
      }
    }
    
    return bestSection;
  }, [sectionIds, opts.scrollOffset]);

  // Intersection Observer callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    // Ignore updates during manual scrolling
    if (manualScrollRef.current) return;
    
    // Find the section with the highest intersection ratio
    let bestEntry: IntersectionObserverEntry | null = null;
    let bestRatio = 0;
    
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
        bestRatio = entry.intersectionRatio;
        bestEntry = entry;
      }
    }
    
    if (bestEntry && bestEntry.target.id) {
      const newActiveSection = bestEntry.target.id;
      if (newActiveSection !== activeSection) {
        if (opts.debug) {
          console.log('Active section changed:', newActiveSection, 'ratio:', bestRatio);
        }
        setActiveSection(newActiveSection);
      }
    }
  }, [activeSection, opts.debug]);

  // Handle scroll events for isScrolling state
  const handleScroll = useCallback(() => {
    // Update scrolling state
    setIsScrolling(true);
    
    if (isScrollingTimeoutRef.current) {
      clearTimeout(isScrollingTimeoutRef.current);
    }
    
    isScrollingTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
    
    // Fallback: if no intersection is detected, use scroll position
    if (!manualScrollRef.current) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        if (!manualScrollRef.current) {
          const scrollBasedSection = findActiveSectionByScroll();
          if (scrollBasedSection !== activeSection) {
            if (opts.debug) {
              console.log('Fallback scroll detection:', scrollBasedSection);
            }
            setActiveSection(scrollBasedSection);
          }
        }
      }, opts.debounceMs);
    }
  }, [activeSection, findActiveSectionByScroll, opts.debounceMs, opts.debug]);

  // Initialize observer and sections
  useEffect(() => {
    // Clear existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Clear sections map
    sectionsRef.current.clear();
    
    // Register all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        sectionsRef.current.set(id, element);
      } else if (opts.debug) {
        console.warn(`Section element with id "${id}" not found`);
      }
    });
    
    // Create intersection observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: opts.rootMargin,
      threshold: Array.isArray(opts.threshold) ? opts.threshold : [opts.threshold],
    });
    
    // Observe all registered sections
    sectionsRef.current.forEach((element) => {
      observerRef.current?.observe(element);
    });
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check for active section
    const initialSection = findActiveSectionByScroll();
    if (initialSection !== activeSection) {
      setActiveSection(initialSection);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (isScrollingTimeoutRef.current) {
        clearTimeout(isScrollingTimeoutRef.current);
      }
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [sectionIds, handleIntersection, handleScroll, findActiveSectionByScroll, opts.rootMargin, opts.threshold]);

  // Handle navigation state for cross-page navigation
  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const targetSection = (location.state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        scrollToSection(targetSection);
        // Clear the state to prevent repeated scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, scrollToSection, navigate, location.pathname]);

  // Update sections when window resizes
  useEffect(() => {
    const updateSections = () => {
      sectionsRef.current.clear();
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          sectionsRef.current.set(id, element);
        }
      });
      
      // Re-observe all sections
      if (observerRef.current) {
        observerRef.current.disconnect();
        sectionsRef.current.forEach((element) => {
          observerRef.current?.observe(element);
        });
      }
    };
    
    window.addEventListener('resize', updateSections);
    
    return () => {
      window.removeEventListener('resize', updateSections);
    };
  }, [sectionIds]);

  return {
    activeSection,
    scrollToSection,
    isScrolling,
  };
};
