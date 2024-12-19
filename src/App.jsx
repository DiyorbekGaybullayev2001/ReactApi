import './App.css'
import {Routes, Route , BrowserRouter, Navigate} from 'react-router-dom'
import Login from './Pages/loginpage/login'
import Homepage from './Pages/homepage/homepage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './Pages/categories/categories';
import Layout from './Pages/Layout/layout';
import Dashboard from './Pages/dashboard/dashboart';
import Brands from './Pages/brands/brands';
import Cities from './Pages/cities/cities';
import Locations from './Pages/locations/locations';
import Models from './Pages/models/models';
import Cars from './Pages/cars/cars';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
            <Route path='/home/*' element={<Layout/>}>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path="brands" element={<Brands/>} />
              <Route path="cities" element={<Cities/>} />
              <Route path="locations" element={<Locations/>} />
              <Route path="model" element={<Models/>} />
              <Route path="cars" element={<Cars/>} />
            </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>

        
    
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App




// import './App.css';
// import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import Login from './Pages/loginpage/login';
// import Homepage from './Pages/homepage/homepage';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Dashboard from './Pages/dashboard/dashboard';
// import Categories from './Pages/categories/categories';
// import Layout from './Pages/Layout/layout';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Login Page */}
//           <Route path="/" element={<Login />} />

//           {/* Protected Routes */}
//           <Route path="/home" element={<Layout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="categories" element={<Categories />} />
//           </Route>

//           {/* Redirect for undefined routes */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>

//         {/* Toast notifications */}
//         <ToastContainer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

