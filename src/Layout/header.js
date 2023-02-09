import { useEffect } from 'react';
import shopApi from '../API/shopApi';
const Login = () => {
  const username ="zzz"
  useEffect(() => {
    (async () => {
      try {
        const res = await shopApi.search();
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