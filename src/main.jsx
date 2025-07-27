import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/index.js';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './index.css';
import Root from './Root.jsx';
import Home from './components/Pages/Home/Home.jsx';


import Details from './components/Pages/Details/Details.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Pages/Login/Login.jsx';

import Register from './components/Pages/Register/Register.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} >
      <Route path='' element={<Home/>}/>
    
  
      <Route path='/:slug' element={<Details/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     







      
      
    </Route>
  )
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
)
