import Header from './components/Header'
import Navigation from './components/Navigation'
import Google_Login from './components/Google_Login'


function App() { 

  
  return ( 
    <div className="app">   
    <h1>Garbage Dating App</h1>    
      <Navigation /> 
      <Header /> 
      
      <Google_Login />
    </div>
  );
}

export default App;
