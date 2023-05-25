import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const Google_Login = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="970651052128-55g9or917od8t74tblmaokmngadmbn5j.apps.googleusercontent.com">
          <GoogleLogin
            theme='filled_black'
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
    </div>
  )
}
export default Google_Login