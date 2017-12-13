import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ScrollTop from './pages/kit/scrollTop';
import { Frame } from './pages';
import AppStores from './stores/index';

export default function renderApp(): React.ReactNode {
  return (
    <Provider {...AppStores}>
      <BrowserRouter>
        <Frame>
          <ScrollTop />
        </Frame>
      </BrowserRouter>
    </Provider>
  );
}
