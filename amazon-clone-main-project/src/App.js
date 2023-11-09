import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,Route,RouterProvider
} from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

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
    <Route index element={<Home/>}></Route>
    </Route>
  </Route>
  ));
  return (
    <div>
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;
