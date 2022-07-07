import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './App.css';
import ListaCategory from './components/ListCategory';

function App() {
  return (
    <div className="App">
      <Main />
      <ListaCategory />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
