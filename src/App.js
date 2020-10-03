import React from 'react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// pages
import Header from './layer/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
