import React, { useState } from 'react';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { useActions } from '../../app/hooks/useActions';
import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';
import { Input } from '../../components/ui/Input';
import styled from 'styled-components';

const ContainerCheckbox = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  & > p {
    margin-left: 14px;
  }
`;

export const LoginPage: React.FC = () => {
  const { authorization } = useActions();
  const { loading, error } = useTypedSelector((state) => state);
  const [checked, Setchecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [auth, setAuth] = useState({
    login: '',
    password: '',
  });

  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const HandleChangeCheckbox = () => {
    Setchecked(!checked);
  };

  const handleChangeAuth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError('');
    setPasswordError('');
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const handleAuthorization = () => {
    if (!auth.login || !auth.password || auth.login) {
      if (!auth.login) return setEmailError('Обязательное поле');
      if (!regEmail.test(auth.login))
        return setEmailError('Введите корректный email');
      if (!auth.password) return setPasswordError('Обязательное поле');
    }

    if (!emailError && !passwordError) authorization(auth);
  };

  return (
    <div className="container">
      <div>
        {error && <Alert>{error}</Alert>}
        <Input
          label="Логин"
          onChange={handleChangeAuth}
          value={auth.login}
          name="login"
          type="email"
          errorIsValid={emailError}
        />
        <Input
          label="Пароль"
          onChange={handleChangeAuth}
          value={auth.password}
          name="password"
          type="password"
          errorIsValid={passwordError}
        />
        <ContainerCheckbox>
          <Checkbox onChangeCheckbox={HandleChangeCheckbox} checked={checked} />
          <p>Запомнить пароль</p>
        </ContainerCheckbox>
        <Button color="primary" loading={loading} onClick={handleAuthorization}>
          Войти
        </Button>
      </div>
    </div>
  );
};
