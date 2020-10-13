import React from 'react';
import { BrowserRouter } from "react-router-dom";

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// router
import AppRoute from './routes/AppRoute';

// store
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
