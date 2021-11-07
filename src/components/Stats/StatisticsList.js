
import PropTypes from 'prop-types';


export default function Statistics({title,stats}) {
    return <section class="statistics">
      {title && <h2>{ title}</h2>}

        <ul class="stat-list">
        {stats.map(item => (
      <li key={item.id} class="item">
        <span class="label">{ item.label}</span>
        <span class="percentage">{item.percentage}%</span>
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