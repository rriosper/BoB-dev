import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Scenes from './scenes';
import Store from './store';
import Theme from './theme';

const App: React.FC = () => (
  <Store>
    <Theme>
      <BrowserRouter>
        <Scenes />
      </BrowserRouter>
    </Theme>
  </Store>
);

export default App;
