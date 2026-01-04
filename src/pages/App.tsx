import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import style from './App.module.scss';

const App = () => (
  <main className={style.content}>
    <Hero />

    <Header />
    <Experience />
  </main>
);

export default App;
