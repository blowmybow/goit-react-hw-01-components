import PropTypes from 'prop-types';
import getRandomHexColor from './GetRandomColor';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <ItemLabel>{label}</ItemLabel>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
