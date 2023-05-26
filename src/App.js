import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile'
import ProtectedRoutes from './components/ProtectedRoutes';

function App() { 
  return ( 
    <>      
    <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />} />
          <Route path="dashboard" element={<Dashboard />} />
     </Routes> 
       
    
      
    </>
  );
}
export default App;
