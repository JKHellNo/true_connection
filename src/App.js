import Header from './components/Header'
import Navigation from './components/Navigation'
import Login from './components/Google_Login'


function App() { 
  return ( 
    <div className="app">      
      <Navigation /> 
      <Header /> 
      <h1>or --- </h1>
        <Login/>
      
    </div>
  );
}

export default App;
