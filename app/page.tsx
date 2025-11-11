import Hero from '@/components/Hero'; // Heroコンポーネントをインポート
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function Home() {
  return (
    <main>
      {/* Heroは最初から見えているのでアニメーション不要 */}
      <Hero />

      {/* Aboutセクションをアニメーションで囲む */}
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>

      {/* Skillsセクションをアニメーションで囲む */}
      <FadeInWhenVisible>
        <Skills />
      </FadeInWhenVisible>

      {/* Projectsセクションをアニメーションで囲む */}
      <FadeInWhenVisible>
        <Projects />
      </FadeInWhenVisible>

      {/* Contactセクションをアニメーションで囲む */}
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>

    </main>
  );
}