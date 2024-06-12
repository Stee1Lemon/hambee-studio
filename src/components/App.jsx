import HomePage from 'pages/HomePage';
import SecondPage from 'pages/SecondPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
};
