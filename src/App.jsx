import './App.css'
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import Login from './Pages/loginpage/login'
import Homepage from './Pages/homepage/homepage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboart from './Pages/dashboard/dashboart';
import Categories from './Pages/categories/categories';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home/*' element={<Homepage/>}/>
          <Route path='/dashboart/*' element={<Dashboart/>}/>
          <Route path='/categories/*' element={<Categories/>}/>
        </Routes>

        
    
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
