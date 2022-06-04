import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/search" element={<App />} />
          <Route path="/about" element={<>About</>} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
