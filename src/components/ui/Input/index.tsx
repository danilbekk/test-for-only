import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface TitleProps {
  errorIsValid: string;
}
const StyledLabel = styled.div`
margin-bottom: 50px;
& > div {
  position absolute;
  margin-top: 10px;
  font-size: 14px;
 color: #E26F6F;
}
`;
const StyledInput = styled.input<TitleProps>`
  width: 100%;
  position relative;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  margin-top: 10px;
  outline: 0;
  ${(props) => {
    if (props.errorIsValid) {
      return css`
        color: red;
        border-color: red;
      `;
    }
  }};
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorIsValid: string;
}
export const Input: React.FC<InputProps> = ({
  errorIsValid,
  label,
  name,
  ...props
}) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledInput errorIsValid={errorIsValid} name={name} {...props} />
        <div>{errorIsValid}</div>
      </StyledLabel>
    </>
  );
};
