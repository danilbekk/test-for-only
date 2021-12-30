import React from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
`;
const StyledCheckbox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;

  ${HiddenCheckbox}:checked + & > div {
    width: 14px;
    height: 14px;
    background: #4a67ff;
    border-radius: 2px;
  } ;
`;

interface CheckboxProps {
  checked: boolean;
  onChangeCheckbox: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  onChangeCheckbox,
  checked,
  ...props
}) => {
  return (
    <>
      <HiddenCheckbox
        onChange={onChangeCheckbox}
        checked={checked}
        {...props}
      />
      <StyledCheckbox>
        <div />
      </StyledCheckbox>
    </>
  );
};
