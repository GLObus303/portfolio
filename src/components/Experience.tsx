import { PageSection, type Job } from './PageSection';
import style from './Experience.module.scss';

const jobs: Job[] = [
  {
    company: 'Monster',
    role: 'React Developer',
    period: '2020 – Present',
    highlights: [
      'Migrated legacy Razzle to NextJS with best practices.',
      'Cut CI build time by 20% through Docker pipeline optimization.',
      'Fixed analytics in critical user path.',
      'Implemented various AI-driven UIs, web message app.',
    ],
  },
  {
    company: 'Toptal',
    role: 'React Developer',
    period: '2021 – Present',
    highlights: [
      'Reduced number of re-renders 100x and boosting load speed by 50%.',
      'Improve SEO performance by orders of magnitude.',
      'Implemented monitoring/analytics for data-driven improvements.',
    ],
  },
  {
    company: 'U.plus',
    role: 'Frontend Lead',
    period: '2019 – 2020',
    highlights: [
      'Led dev team of 6 members for EU-wide car marketplace.',
      'Maintained two large codebases with LOC over 100k.',
      'Introduced custom Git pipeline flow resulting in reliable deployments.',
    ],
  },
  {
    company: 'INVENTI',
    role: 'Team Lead (React Developer)',
    period: '2017 – 2019',
    highlights: [
      'Wrote and estimated customer offer that lead to successful project.',
      'Build Node.js pipeline evaluation CSV feedback with 10+ mil items.',
      'Implemented effective ElasticSearch search over 100+ mil items.',
    ],
  },
];

export const Experience: React.FC = () => (
  <PageSection
    number="02"
    sectionTitle="Galaxy of Roles"
    subtitle="Orbiting Companies"
  >
    <ul className={style.jobList}>
      {jobs.map((job) => (
        <li key={job.company} className={style.job}>
          <h3 className={style.jobTitle}>
            <span className={style.company}>{job.company}</span>
            <span> – {job.role}</span>
          </h3>
          <p className={style.period}>{job.period}</p>
          <ul className={style.highlights}>
            {job.highlights.map((highlight) => (
              <li key={highlight} className={style.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </PageSection>
);
