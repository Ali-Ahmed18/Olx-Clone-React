import React from 'react'
import Dashboard from './Pages/dashboard';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import ProductSell from './Pages/product/productSell';
import Singlepage from './Pages/singlepage/singlepage';
import Signup from './Pages/signup';
import Page404 from './Pages/404Page/404page';
import AuthGuard from "./Pages/authGuard/AuthGuard.jsx"
import AuthenticMilldeware from "./Pages/AuthenticMilldeware/AuthenticMilldeware.jsx"
import MyAdds from './Pages/myAdds/Myadds.jsx';
import FavouriteAds from './Pages/favouriteAds/index.jsx';
import UpdatePost from './Pages/updatePost/index.jsx';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' index element={<Dashboard />} />
        <Route path='/login' element={<AuthGuard ><Login /></AuthGuard>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sellproduct' element={<AuthenticMilldeware><ProductSell /></AuthenticMilldeware>} />
        <Route path='/singlepage/:id' element={<Singlepage />} />
        <Route path='/myads' >
          <Route index element={<AuthenticMilldeware><MyAdds /></AuthenticMilldeware>} />
          <Route path='updatepost' element={<AuthenticMilldeware><UpdatePost /></AuthenticMilldeware>} />
        </Route>
        <Route path='/myfavourites' element={<AuthenticMilldeware><FavouriteAds /></AuthenticMilldeware>} />
        <Route path='*' element={<Page404 />} />
      </Routes>


    </>
  )
}

export default App
