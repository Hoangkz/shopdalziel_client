import { useEffect } from 'react';
import shopApi from '../API/shopApi';
const Login = () => {
  const username ="zzzz"
  useEffect(() => {
    (async () => {
      try {
        const res = await shopApi.search("a");
        console.log(res.data);
        
      } catch (error) {
        console.log(error);
      }
    })();
  },[username]);

  
  return (
    <div className="App">
      header
    </div>
  );
};

export default Login;