import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { History } from '../../pages/History';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { useEffect } from 'react';
import { Home } from '../../pages/';
import { Settings } from '../../pages/Settings';

function ScrollToTop() {
  //It's going to take the current path
  const { pathname } = useLocation();
  //The page is going to the top every moment the pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior:'smooth' });
  }, [pathname]);
  return null;
}
export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
