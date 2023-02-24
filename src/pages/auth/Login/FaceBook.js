import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import FacebookLogin  from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import "./facebook.css"
export default function Facebook () {
  const handleFacebookLogin = async () => {
    try {
      const response = await window.FB.login();
      const { accessToken } = response.authResponse;
      const userData = await fetch(`https://graph.facebook.com/v12.0/me?fields=id,name,email,picture&access_token=${accessToken}`);
      const user = await userData.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FacebookLogin
        appId="YOUR_APP_ID"
        fields="name,email,picture"
        callback={handleFacebookLogin}
        cssClass="facebook"
        icon={<Icon className='iconFacebook' color={"#4c69ba"} as={FaFacebook} />}
        textButton={<Box>Đăng nhập với Facebook</Box>}
      />
    </div>
  )
}



