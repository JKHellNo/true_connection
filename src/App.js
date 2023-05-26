import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile'

function App() { 
  return ( 
    <>      
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
     </Routes> 
       
    
      
    </>
  );
}
export default App;
