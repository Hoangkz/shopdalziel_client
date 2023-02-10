import { useEffect } from 'react';
import shopApi from '../API/shopApi';
const Login = () => {
  const username ="zzzz"
  useEffect(() => {
    (async () => {
      try {
        const res = await shopApi.search();
        console.log(res.data.item);
        
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