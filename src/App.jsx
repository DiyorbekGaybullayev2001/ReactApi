import './App.css'
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import Login from './Pages/loginpage/login'
import Homepage from './Pages/homepage/homepage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Homepage/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </>
  )
}

export default App
