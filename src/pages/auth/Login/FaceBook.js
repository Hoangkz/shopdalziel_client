import { Box, Icon } from '@chakra-ui/react';
import React from 'react';
import FacebookLogin  from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import "./facebook.css"
export default function Facebook () {
  function responseFacebook(response) {
    console.log(response);
  }

  return (
    <div>
      <FacebookLogin
        appId="555833559847846"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="facebook"
        icon={<Icon className='iconFacebook' color={"#4c69ba"} as={FaFacebook} />}
        textButton={<Box>Đăng nhập với Facebook</Box>}
      />
    </div>
  )
}



