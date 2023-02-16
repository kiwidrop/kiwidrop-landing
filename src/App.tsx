import Helmet from 'react-helmet';

import styles from './App.scss';
import AppRouter from './AppRouter';
import env from './cons/env';

const { prefixCls } = styles;

function App(): JSX.Element {

  return (
      <div className={prefixCls}>
        {/* SEO related settings */}
        <Helmet defaultTitle="KiwiDrop" titleTemplate="%s | KiwiDrop">
          <html lang="en" data-version={env.PACKAGE_VERSION} />
          <meta name="keywords" content="kiwidrop,KiwiDrop,Kiwi Drop" />
          <meta name="description" content="KiwiDrop Website" />
        </Helmet>
       
          <AppRouter />
      </div>
  );
}

export default App;
