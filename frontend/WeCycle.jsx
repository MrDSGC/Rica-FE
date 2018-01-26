import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';




document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

//SETUP FRONTEND USER SIGNUP SIGNIN
  const root = document.getElementById('root');
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
});
