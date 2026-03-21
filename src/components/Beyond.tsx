import { PageSection } from './PageSection';
import style from './Beyond.module.scss';

const linkedInLabel = 'Lukas Cizek on LinkedIn (opens in a new tab)';
const githubLabel = 'Lukas Cizek on GitHub (opens in a new tab)';

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
      <div className={style.connect}>
        <p>
          Want to connect? I&apos;m on LinkedIn if you wanna reach out to chat.
          Or you can check out my GitHub.
        </p>
        <ul className={style.socialList}>
          <li>
            <a
              className={style.socialLink}
              href="https://www.linkedin.com/in/lukascizek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedInLabel}
            >
              <svg
                className={style.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className={style.socialLink}
              href="https://github.com/GLObus303"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={githubLabel}
            >
              <svg
                className={style.socialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
);
