import style from './PageSection.module.scss';

export type Job = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type PageSectionProps = {
  number: string;
  sectionTitle: string;
  subtitle: string;
  children: React.ReactNode;
};

export const PageSection: React.FC<PageSectionProps> = ({
  number,
  sectionTitle,
  subtitle,
  children,
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

        <div className={style.sectionContent}>{children}</div>
      </div>
    </div>
  </section>
);
