import React from 'react';
import {
  FeedbackOptionsWrapper,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export default function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <FeedbackOptionsWrapper>
      {options.map(option => (
        <FeedbackOptionsButton
          type="button"
          key={option}
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackOptionsButton>
      ))}
    </FeedbackOptionsWrapper>
  );
}
