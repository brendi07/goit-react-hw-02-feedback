import {
  StatisticsTitle,
  StatisticsText,
  StatisticsResult,
} from '../statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <StatisticsTitle>Statistics</StatisticsTitle>
    <StatisticsText>
      Good:
      <StatisticsResult>{good}</StatisticsResult>
    </StatisticsText>
    <StatisticsText>
      Neutral:
      <StatisticsResult>{neutral}</StatisticsResult>
    </StatisticsText>
    <StatisticsText>
      Bad:
      <StatisticsResult>{bad}</StatisticsResult>
    </StatisticsText>
    <StatisticsText>
      Total:<StatisticsResult>{total}</StatisticsResult>
    </StatisticsText>
    <StatisticsText>
      Positive feedback:
      <StatisticsResult>
        {positivePercentage}
        %
      </StatisticsResult>
    </StatisticsText>
  </div>
);

export default Statistics