import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import {AuthContextProvider} from "./store/auth-context";
import {StoreContextProvider} from "./store/store";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <StoreContextProvider>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </StoreContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

