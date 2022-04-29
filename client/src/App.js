import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import ErrorBoundary from './components/commons/ErrorBoundary';
import MainPage from './components/MainPage';

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}
