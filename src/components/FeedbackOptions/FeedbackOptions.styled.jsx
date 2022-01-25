import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  text-align: center;
`;

export const FeedbackOptionsButton = styled.button`
  background-color: rgba(77, 209, 112, 0.8);
  color: black;
  padding: 5px 15px;
  border-radius: 10px;
  transition: all 400ms linear;
  :hover {
    background-color: rgba(34, 86, 181, 1);
    color: white;
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;
