import style from './PageSection.module.scss';

export type Job = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type PageSectionProps = {
  jobs: Job[];
  number: string;
  sectionTitle: string;
  subtitle: string;
};

export const PageSection: React.FC<PageSectionProps> = ({
  jobs,
  number,
  sectionTitle,
  subtitle,
}) => (
  <section
    className={style.section}
    aria-labelledby={`section-title-${number}`}
  >
    <div className={style.container}>
      <span className={style.sectionNumber} aria-hidden="true">
        {number}
      </span>

      <div className={style.content}>
        <header className={style.sectionHeader}>
          <h2 id={`section-title-${number}`} className={style.sectionTitle}>
            {sectionTitle}
          </h2>
          <p>{subtitle}</p>
        </header>

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
      </div>
    </div>
  </section>
);
