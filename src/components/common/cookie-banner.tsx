import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-white/10 p-4 md:p-6 shadow-[0_-4px_30px_rgba(0,0,0,0.8)] z-50 animate-in slide-in-from-bottom flex justify-between items-center gap-4">
      <div className="flex-1 max-w-4xl text-left">
        <p className="text-gray-300 text-sm md:text-base font-sans tracking-wide">
          {t('cookie.message')} <a href="/privacy" className="text-gold hover:underline">{t('cookie.policy_link')}</a>.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={accept}
          className="bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-widest text-xs px-6 py-2.5 rounded shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
        >
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  );
}