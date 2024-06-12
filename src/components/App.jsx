import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const SecondPage = lazy(() => import('pages/SecondPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
