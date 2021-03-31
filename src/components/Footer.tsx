import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="h-16 bg-gradient-to-r from-indigo-500 to-blue-700">
      <div className="h-full mx-auto container flex justify-between items-center">
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
            link="mailto:san:mail@octanium.fr"
          />
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
    className="w-10 h-10 border border-white flex justify-center items-center rounded-full mr-4 last:mr-0">
    <img src={src} alt={alt} className="w-5 h-5" />
  </a>
);

export default Footer;
