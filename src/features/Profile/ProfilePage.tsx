import React from 'react';
import { useActions } from '../../app/hooks/useActions';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { Button } from '../../components/ui/Button';
import styled from 'styled-components';

const StyledProfile = styled.div`
  max-width: 770px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;

  & > button {
    width: 200px;
    border-radius: 8px;
    color: black;
  }
`;

const StyledWelcom = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 400;
  & > span {
    font-weight: 700;
  }
`;
export const ProfilePage: React.FC = () => {
  const { logOut } = useActions();

  const { user } = useTypedSelector((state) => state);

  return (
    <StyledProfile>
      <StyledWelcom>
        Здравствуйте, <span>{user[0].login}</span>
      </StyledWelcom>
      <Button color="light" onClick={logOut}>
        Выйти
      </Button>
    </StyledProfile>
  );
};
