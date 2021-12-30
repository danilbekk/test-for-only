import React from 'react';
import { LoginPage } from '../features/Login/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components/Layout/Header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import { ProfilePage } from '../features/Profile/ProfilePage';

export const App = () => {
  const { authorized } = useTypedSelector((state) => state);

  if (!authorized) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/profile" />} />
      </Routes>
    </>
  );
};
