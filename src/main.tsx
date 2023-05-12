import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/public-sans';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import Footer from './components/Footer';

axios.defaults.params = {apiKey: "dc6c52bcb7734ed59ed9898541938a6d", language: "en"};
axios.defaults.baseURL = "https://news-proxy.netlify.app/api";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <Footer />
    </Provider>
  </React.StrictMode>,
)