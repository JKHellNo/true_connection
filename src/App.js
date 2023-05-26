import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Login';
import Header from './components/Header'
import Navigation from './components/Navigation'
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';



function App() { 
  return ( 
    <div className="app">     
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
     </Routes> 
      
    </div>
  );
}

export default App;
