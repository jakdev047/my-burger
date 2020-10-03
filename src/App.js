import React from 'react';
import { BrowserRouter } from "react-router-dom";

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// router
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
