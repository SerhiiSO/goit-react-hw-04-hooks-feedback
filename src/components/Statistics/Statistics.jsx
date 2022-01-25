import React from 'react';
import { StatisticsWrapper, StatisticsInfo } from './Statistics.styled';

export default function Statistics(props) {
  const {
    good,
    neutral,
    bad,
    onCountTotalFeedBack,
    onCountPositiveFeedbackPercentage,
  } = props;
  return (
    <StatisticsWrapper>
      <StatisticsInfo>
        Good:<span>{good}</span>
      </StatisticsInfo>
      <StatisticsInfo>
        Neutral:<span>{neutral}</span>
      </StatisticsInfo>
      <StatisticsInfo>
        Bad:<span>{bad}</span>
      </StatisticsInfo>
      <StatisticsInfo>
        Total:<span>{onCountTotalFeedBack}</span>
      </StatisticsInfo>
      <StatisticsInfo>
        Positive feedback:<span>{onCountPositiveFeedbackPercentage} %</span>
      </StatisticsInfo>
    </StatisticsWrapper>
  );
}
