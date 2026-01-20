import style from './Pill.module.scss';

type PillProps = {
  label: string;
  years: number;
  highlighted?: boolean;
};

export const Pill: React.FC<PillProps> = ({ label, years, highlighted }) => (
  <span className={`${style.pill} ${highlighted ? style.highlighted : ''}`}>
    {label} - {years} years
  </span>
);
