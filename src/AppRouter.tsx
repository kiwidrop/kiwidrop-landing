import { Route, Routes } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import LandingLayout from '@/pages/LandingPage/Layout';

function Router(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
