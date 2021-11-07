
import PropTypes from 'prop-types';


export default function Statistics({stats}) {
    return <section class="statistics">
  <h2 class="title">Upload stats</h2>

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
  stats: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  })),
}