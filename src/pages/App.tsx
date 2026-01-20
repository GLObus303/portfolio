import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { TechnicalCore } from '../components/TechnicalCore';
import { Beyond } from '../components/Beyond';
import style from './App.module.scss';

const App = () => (
  <main className={style.content}>
    <Hero />

    <Header />
    <Experience />
    <TechnicalCore />
    <Beyond />
  </main>
);

export default App;
