import React from 'react';
import PropTypes from 'prop-types';
import {StatisticsContainer} from './StatisticsStyled';

const Statistics = ({title, stats}) => (
  <StatisticsContainer>
    {title !== undefined && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </StatisticsContainer>
);

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
};

export default Statistics;
