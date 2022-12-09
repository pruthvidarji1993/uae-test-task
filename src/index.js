import React from 'react';

//react-dom
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

//history
import { history } from './history';

// ** Redux Imports
import { Provider } from 'react-redux';
import { store, persistor } from './redux/storeConfig/store';
import { PersistGate } from 'redux-persist/integration/react';

//react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Component
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter
          history={history}
          basename={process.env.REACT_APP_BASENAME}
        >
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <ToastContainer newestOnTop />
          </PersistGate>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
