import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from './components/ProtectedRoutes';

function App() { 
  return ( 
    <>      
    <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
     </Routes> 
       
    
    </>
  );
}
export default App;
