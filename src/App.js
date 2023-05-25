import Registration from './components/Registration'
import Navigation from './components/Navigation'
import Login from './components/Google_Login'


function App() { 
  return ( 
    <div className="app">      
      <Navigation /> 
      <Registration /> 
      <h1>or --- </h1>
        <Login/>
      
    </div>
  );
}

export default App;
