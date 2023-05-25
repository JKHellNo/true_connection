import SignIn from './components/Sign-in'
import Navigation from './components/Navigation'
import Login from './components/Google_Login'


function App() { 
  return ( 
    <div className="app">      
      <Navigation /> 
      <SignIn /> 
      <h1>or --- </h1>
        <Login/>
      
    </div>
  );
}

export default App;
