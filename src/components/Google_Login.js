import React from 'react'
import  './Google_login.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const Google_Login = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="970651052128-ju983bnpmanoua5eegkhbellmhn59jt4.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      <div class="login_container">
        <div class="g-sign-in-button">
          <div class="content-wrapper">
            <div class="logo-wrapper">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt=''/>
            </div>
            <span class="text-container">
              <span>Sign in with Google</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Google_Login