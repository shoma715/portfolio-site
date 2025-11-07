import Hero from '@/components/Hero'; // Heroコンポーネントをインポート
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero /> {/* 作成したHeroコンポーネントを配置 */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}