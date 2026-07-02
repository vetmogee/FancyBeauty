import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationPicker from "./pages/LocationPicker";
import HomePage from "./pages/Home";
import Obeauty from "./pages/Obeauty";
import Fancy from "./pages/Fancy";
import NotFound from "./pages/NotFound";
import AgbPage from "./pages/agb";
import { SpeedInsights } from '@vercel/speed-insights/react';

const queryClient = new QueryClient();

const LangSync = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const syncLang = (lng: string) => {
      document.documentElement.lang = lng.startsWith('de') ? 'de' : 'en';
    };
    syncLang(i18n.language);
    i18n.on('languageChanged', syncLang);
    return () => { i18n.off('languageChanged', syncLang); };
  }, [i18n]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LangSync />
        <Routes>
          <Route path="/" element={<LocationPicker />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/obeauty" element={<Obeauty />} />
          <Route path="/fancy" element={<Fancy />} />
          <Route path="/agb" element={<AgbPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
