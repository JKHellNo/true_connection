import Header from './components/Header'
import Navigation from './components/Navigation'
import Login from './components/Google_Login'


function App() { 
  return ( 
    <div className="app">      
      <Navigation /> 
      <Header /> 
      <h1>---or --- </h1>
      <div className="app__login" width="60px">
        <Login/>
      </div>
    </div>
  );
}

export default App;
