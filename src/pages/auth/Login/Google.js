import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
export default function Google() {
  const onSuccess = (response) => {
    console.log(response)
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div>
      {/* <GoogleOAuthProvider
        clientId="258973467365-5tkd75mps3ktb0a6k8cl4q5gv32u9krp.apps.googleusercontent.com"
      >

        <GoogleLogin
          clientId="258973467365-5tkd75mps3ktb0a6k8cl4q5gv32u9krp.apps.googleusercontent.com"
          buttonText="Đăng nhập với Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </GoogleOAuthProvider> */}
      <GoogleOAuthProvider
          clientId="258973467365-5tkd75mps3ktb0a6k8cl4q5gv32u9krp.apps.googleusercontent.com"
          auto_select={false}

      >
        <GoogleLogin

          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          
        />;
      </GoogleOAuthProvider>
    </div>
  );
};

