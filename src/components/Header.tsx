import { useEffect, useState } from 'react';

import reactIcon from '../assets/react.svg';
import technicalCoreLogo from '../assets/technical-core-logo.svg';
import beyondLogo from '../assets/beyond-logo.svg';
import style from './Header.module.scss';

type HeaderConfig = {
  logo: string;
  scalePower: string;
};

const headerConfigs: HeaderConfig[] = [
  { logo: reactIcon, scalePower: '21' },
  { logo: technicalCoreLogo, scalePower: '13' },
  { logo: beyondLogo, scalePower: '-10' },
];

export const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[aria-labelledby]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let newIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          newIndex = index;
        }
      });

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const currentConfig = headerConfigs[activeIndex] ?? headerConfigs[0];

  return (
    <header className={style.header}>
      Lukas Cizek
      <div className={style.logo}>
        <p>
          10<sup>{currentConfig.scalePower}</sup>m
        </p>
        <div className={style.logoIcons}>
          {headerConfigs.map((config, index) => (
            <img
              key={config.logo}
              className={`${style.logoIcon} ${index === activeIndex ? style.logoActive : ''}`}
              src={config.logo}
              alt={index === activeIndex ? 'Logo' : ''}
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
