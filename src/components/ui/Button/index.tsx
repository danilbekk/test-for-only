import React from 'react';
import styled from 'styled-components';

interface PropsStyledButton {
  color: string;
}

const StyledButton = styled.button<PropsStyledButton>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  outline: none;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.colors[props.color].text};
  background-color: ${(props) => props.theme.colors[props.color].main};
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  &[disabled] {
    opacity: 0.5;
  }
`;

interface ButtonProps {
  loading?: boolean;
  onClick: () => void;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color = 'primary',
  children,
  loading,
  ...props
}) => (
  <StyledButton onClick={onClick} color={color} {...props} disabled={loading}>
    {children}
  </StyledButton>
);
