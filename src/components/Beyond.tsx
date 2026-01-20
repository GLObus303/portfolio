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
        Over the years, my work has gone beyond day-to-day development.
        I&apos;ve mentored junior developers, shared knowledge across teams, and
        built a few passion projects along the way. One of them is SportujSpolu,
        a platform I co-created to help people find others to do sports with.
      </p>
      <p>
        Mentoring has been one of the most meaningful parts of my work.
        I&apos;ve helped QA testers transition into React roles, supported
        developers across teams, and volunteered multiple times as a mentor at
        React Girls events. For me, it&apos;s not just about shipping features,
        but about leaving teams and people stronger than I found them.
      </p>
    </div>
  </PageSection>
);
