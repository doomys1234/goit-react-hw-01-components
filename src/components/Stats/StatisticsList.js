
import PropTypes from 'prop-types';
import s from './Stats.module.scss'

export default function Statistics({title,stats}) {
    return <section className={s.section}>
      {title && <h2 className={s.title}>{ title}</h2>}

        <ul className={s.list}>
        {stats.map(({id, label, percentage}) => (
      <li key={id} className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
    </li>
  ) )}
  </ul>
</section>
}

Statistics.prototype = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
}