import React from 'react';
import './styles/app.scss';
import Routes from './routes';
import AppBar from './components/AppBar';

function App(): JSX.Element {
  return (
    <div className="App">
      <AppBar />
      <Routes />
    </div>
  );
}

export default App;
