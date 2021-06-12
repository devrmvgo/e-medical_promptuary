import React from 'react';
import './styles/app.scss';
import Routes from './routes';
import AppBar from './components/SideBar';

import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar>
          <Routes />
        </AppBar>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
