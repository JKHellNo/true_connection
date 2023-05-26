import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from "react";
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const UserContext = createContext();

function App() { 
  const [user, setUser] = useState({ loggedIn: false });
  return ( 
    <div className="app">     
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
       </Routes> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
