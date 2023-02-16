import { Outlet } from 'react-router-dom';

import Header from './Header';
import css from './Layout.module.scss';

const Layout = () => (
  <div className={css.layout_main}>
    <Header />
    <Outlet />
  </div>
);

export default Layout;
