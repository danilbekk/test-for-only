import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
`;

export const Header: React.FC = () => <StyledHeader>ONLY.</StyledHeader>;
