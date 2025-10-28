import react from '../assets/react.svg';
import style from './App.module.scss';

const App = () => (
  <>
    <header className={style.header}>
      Lukas Cizek
      <div className={style.logo}>
        <p>
          10<sup>-10</sup>m
        </p>
        <img className={style.logoIcon} src={react} alt="React" />
      </div>
    </header>
    <main className={style.content}>
      <hgroup className={style.titleGroup}>
        <h1 className={style.name}>Lukas Cizek</h1>
        <p className={style.title}>Senior Fullstack Developer | Team Leader</p>
      </hgroup>
    </main>
  </>
);

export default App;
