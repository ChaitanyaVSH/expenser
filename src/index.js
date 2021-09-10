import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React Toast based notifications
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Store provider
import { Provider } from "react-redux";
import store from './redux/store';

// Global styles
import './index.css';

// React Routes
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import NavBar from './components/Navbar/NavBar';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <NavBar/>
        <ToastContainer
          position="top-right"
          autoClose={7000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {routes}
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
