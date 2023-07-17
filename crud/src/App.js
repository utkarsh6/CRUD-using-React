
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Employee from './emp'
import Empedit  from'./empedit';
import Createemp from './createemp';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Employee/>}/>
      <Route path='/empdata/:empid' element={<Empedit/>}/>
      <Route path='/add' element={<Createemp/>}/>
      </Routes>
      
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
