import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, titel }) => {
  return (
    <section className={css.statistics}>
      {titel && <h2 class={css.title}>Upload stats</h2>}

      <ul className={css['stat-list']}>
        {stats.map(data => (
          <li key={data.id} className={css.item}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: propTypes.shape({
    id: propTypes.string,
    label: propTypes.string,
    percentage: propTypes.number,
  }).isRequired,
  titel: propTypes.string.isRequired,
};
