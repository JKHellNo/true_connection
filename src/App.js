function App() {
  return (
    <div className="App">     
      <h3> Log In </h3>
<form action="/login/" method="POST">
  <input id="id_login_username" type="text" name="login_username"  /><br />
  <input type="password" name="login_password" id="id_login_password" /><br />
  <button type="submit" class="btn btn-info">Login</button>
</form>

<h3> Sign Up <small>(It's free!)</small></h3>
<form action="/register/" method="POST" >
  <input id="fname" type="text" placeholder="username" name="name"  /><br />
  <input type="text" name="register_email" id="id_register_email" /><br />
  <input type="password" name="register_password" id="id_register_password" /><br />
  <input type="password" name="register_password2" id="id_register_password2" /><br />
  <button type="submit" class="btn">Submit</button>
</form>

<form method="post">
  First name:<input type="text" name="fname" /><br />
  Last name: <input type="text" name="lname" /><br />
  E-mail: <input type="text" name="email" /><br />
  Phone: <input type="text" name="phone" /><br />
  Address: <input type="text" name="address" /><br />
</form>

    </div>
  );
}

export default App;
