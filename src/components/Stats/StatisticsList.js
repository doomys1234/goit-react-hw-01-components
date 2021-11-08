
import PropTypes from 'prop-types';
import s from './Stats.module.scss'

export default function Statistics({title,stats}) {
    return <section className={s.section}>
      {title && <h2 className={s.title}>{ title}</h2>}

        <ul className={s.list}>
        {stats.map(item => (
      <li key={item.id} className={s.item}>
        <span className={s.label}>{ item.label}</span>
        <span className={s.percentage}>{item.percentage}%</span>
    </li>
  ) )}
  </ul>
</section>
}

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  })),
}