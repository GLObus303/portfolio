import { PageSection } from './PageSection';
import style from './Beyond.module.scss';

export const Beyond: React.FC = () => (
  <PageSection
    number="04"
    sectionTitle="Beyond..."
    subtitle="Every Action Sparks a Reaction"
  >
    <div className={style.content}>
      <p>
        Over the years, I&apos;ve gone beyond day-to-day work — mentoring junior
        developers, contributing to the community, and building passion
        projects. A highlight has been co-creating SportujSpolu, a platform that
        connects people who want to sport together.
      </p>
      <p>
        Mentoring has been one of the most rewarding parts of my journey.
        I&apos;ve supported QA testers transitioning into React developers,
        shared best practices across teams, and volunteered as a mentor at React
        Girls events multiple times. For me, it&apos;s not only about delivering
        products — it&apos;s about helping others grow.
      </p>
    </div>
  </PageSection>
);
