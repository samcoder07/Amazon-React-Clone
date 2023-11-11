import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,Route,RouterProvider
} from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { productsData } from './api/api';
import Signin from './pages/Signin';

const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} loader={productsData}></Route>
  </Route>
    <Route path="/signin" element={<Signin/>}></Route>
    </Route>
  ));
  return (
    <div className='font-bodyFont bg-gray-100 '>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
