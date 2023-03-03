import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { tokenRemainingSelector } from '../../redux/selectors';

export default function PrivateRoute (){
  const user = useSelector(tokenRemainingSelector).user;
  const location = useLocation()
  return (
    (user?.role >= 1)?<Outlet/>:<Navigate to="/auth/login" state={{from :location}} replace/>
  )
}
