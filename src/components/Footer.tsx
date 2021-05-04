import React, { useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import useTheme, { Theme } from '@src/hooks/useTheme';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  const handleThemeChange = useCallback((theme: Theme) => {
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <footer className="h-32 sm:h-16 bg-gradient-to-r from-indigo-500 to-blue-700">
      <div className="h-full mx-auto container flex flex-col-reverse justify-around sm:flex-row sm:justify-between items-center">
        <p className="font-display text-xl text-white font-medium">
          © Benjamin Lepas
        </p>
        <div className="flex">
          <Social
            alt="Malt"
            src="/static/malt.svg"
            link="https://www.malt.fr/profile/benjaminlepas"
          />
          <Social
            alt="Twitter"
            src="/static/twitter.svg"
            link="https://twitter.com/0ctanium"
          />
          <Social
            alt="Linkedin"
            src="/static/linkedin.svg"
            link="https://www.linkedin.com/in/benjamin-lepas-dev/"
          />
          <Social
            alt="Github"
            src="/static/github.svg"
            link="https://github.com/0ctanium"
          />
          <Social
            alt="Mail"
            src="/static/mail.svg"
            link="mailto:mail@octanium.fr"
          />
        </div>
        <div className="flex">
          {theme === 'dark' ? (
            <button
              title={t('footer.theme.light')}
              onClick={() => handleThemeChange('light')}
              className="w-10 h-10 border border-white flex justify-center items-center rounded-full mr-4 last:mr-0 text-white focus:outline-none">
              <FiSun className="w-5 h-5" />
            </button>
          ) : (
            <button
              title={t('footer.theme.dark')}
              onClick={() => handleThemeChange('dark')}
              className="w-10 h-10 border border-white flex justify-center items-center rounded-full mr-4 last:mr-0 text-white focus:outline-none">
              <FiMoon className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

interface SocialProps {
  alt: string;
  src: string;
  link: string;
}

const Social: React.FC<SocialProps> = ({ link, src, alt }) => (
  <a
    title={alt}
    href={link}
    rel="noreferrer"
    target="_blank"
    className="w-10 h-10 border border-white flex justify-center items-center rounded-full mr-4 last:mr-0 text-white">
    <img src={src} alt={alt} className="w-5 h-5" width="20" height="20" />
  </a>
);

export default Footer;
