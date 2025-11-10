import profilePicture from '../assets/profile.png';
import style from './Hero.module.scss';

export const Hero: React.FC = () => (
  <section className={style.hero}>
    <hgroup className={style.titleGroup}>
      <h1 className={style.name}>Lukas Cizek</h1>
      <p className={style.title}>Senior Fullstack Developer | Team Leader</p>
    </hgroup>

    <img
      className={style.profilePicture}
      src={profilePicture}
      alt="Lukas Cizek profile"
    />
  </section>
);
