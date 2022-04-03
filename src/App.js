import Login from './components/Login'
import './App.css';
import Home from './components/Home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/userActions';
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  const passkey = useSelector(state => state.passkey);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
  },[])

  return (
    <Routes>
      <Route path={'/home'} element={passkey ? <Home /> : <Navigate to={'/login'} />} />
      {['/*','/login/*'].map(path => <Route key={path} path={path} element={passkey ? <Navigate to={'/home'} /> : <Login />} />)}
    </Routes>
  )
}
export default App;
