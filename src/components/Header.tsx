import reactIcon from '../assets/react.svg';
import style from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={style.header}>
    Lukas Cizek
    <div className={style.logo}>
      <p>
        10<sup>-10</sup>m
      </p>
      <img className={style.logoIcon} src={reactIcon} alt="React" />
    </div>
  </header>
);
