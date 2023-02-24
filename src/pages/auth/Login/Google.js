import React from 'react';
import GoogleLogin from 'react-google-login';
export default function Google () {
  const responseGoogle = (response) => {
    // Xử lý thông tin người dùng sau khi đăng nhập thành công
    console.log("vao day1")
    console.log(response);
  };
  const errorGoogle = (error) => {
    // Xử lý thông tin người dùng sau khi đăng nhập thành công
    console.log("vao day2")
    console.log(error);
  };

  const clientId = "258973467365-rg463ac7tvj4iiu39a1d4jupalbscnn0.apps.googleusercontent.com"
  return (
    <div>
      <GoogleLogin
        clientId= {clientId}
        buttonText="Đăng nhập bằng Google"
        onSuccess={responseGoogle}
        onFailure={errorGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

