import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <PersistGate Loading={"loading"} persistor={persistor}>
       <App />
       </PersistGate>
    </Provider>
);

