import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './pages/settings/settings';
import Game from './pages/game/game';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default Router;
