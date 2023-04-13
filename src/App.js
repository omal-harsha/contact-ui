import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from '../src/pages/Home.js'
import { Second } from './Second';
import { AddEdit } from './pages/AddEdit';


function App() {

  return (
    <BrowserRouter>
      <div>
        <ToastContainer position='top-center'/>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/addContact' Component={AddEdit}/>
            <Route path='/update/:id' Component={AddEdit}/>
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
