import { PageSection } from './PageSection';
import { Pill } from './Pill';
import style from './TechnicalCore.module.scss';

type Skill = {
  label: string;
  years: number;
  highlighted?: boolean;
};

const skills: Skill[] = [
  { label: 'Jest', years: 7 },
  { label: 'TypeScript', years: 8, highlighted: true },
  { label: 'Next.js', years: 8, highlighted: true },
  { label: 'React', years: 8 },
  { label: 'Go', years: 1 },
  { label: 'Perf. optimization', years: 5 },
  { label: 'Leadership', years: 4 },
  { label: 'Java', years: 2 },
  { label: 'Playwright', years: 3 },
  { label: 'SEO', years: 2 },
];

export const TechnicalCore: React.FC = () => (
  <PageSection
    number="03"
    sectionTitle="Technical Core"
    subtitle="Solar System of Skills"
  >
    <div className={style.content}>
      <div className={style.paragraphs}>
        <p>
          I&apos;ve spent eight years mastering React, TypeScript, and Next.js,
          building fast, scalable, and accessible applications. These tools
          define my frontend expertise and allow me to craft seamless user
          experiences.
        </p>
        <p>
          On the backend, I work with Node.js, Java, and Go, combining
          flexibility with performance. This mix lets me design systems that are
          both reliable and efficient across the stack.
        </p>
        <p>
          I focus on performance, testing, and leadership — cutting load times,
          improving pipelines, and ensuring quality with Jest and Playwright.
          With years of mentoring and team leadership, I deliver code
          that&apos;s not just functional, but impactful.
        </p>
      </div>

      <div className={style.skillsGrid}>
        {skills.map((skill) => (
          <Pill
            key={skill.label}
            label={skill.label}
            years={skill.years}
            highlighted={skill.highlighted}
          />
        ))}
      </div>
    </div>
  </PageSection>
);
