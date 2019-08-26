// Dependencies
import React from 'react';

// Assets
import { GlobalStyles } from './GlobalStyles';

// Components
import { FirstStyled } from './components/FirstStyled';

export const App = () => (
  <div>
    <GlobalStyles />
    <FirstStyled path="https://github.com/jesuskata/reactjs-base" />
  </div>
);
