import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
  const [user, setUser] = useState(null);

  const responseFacebook = (response) => {
    console.log(response);
    setUser(response);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.picture.data.url} alt="Profile" />
        </div>
      ) : (
        <FacebookLogin
          appId="YOUR_APP_ID"
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default Login;