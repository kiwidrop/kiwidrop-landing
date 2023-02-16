import '@fontsource/jost/index.css';
import '@fontsource/jost/variable.css';
import '@fontsource/jost/variable-italic.css';
import './index.scss';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import { IconContext } from 'react-icons';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

render(
  <StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <App />
      </IconContext.Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
