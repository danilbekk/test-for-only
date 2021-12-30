import React from 'react';
import styled from 'styled-components';
const StyledAlert = styled.div`
  display: flex;
  padding: 20px 20px;
  margin: 20px 0;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  box-sizing: border-box;
  border-radius: 8px;

  & > button {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    color: #ee6565;
    background: #ffc8c8;
    border-radius: 100px;
    font-weight: normal;
    font-size: 12px;
    border: none;
    cursor: pointer;
  }
`;

export const Alert: React.FC = ({ children }) => {
  return (
    <StyledAlert>
      <button>!</button>
      {children}
    </StyledAlert>
  );
};
