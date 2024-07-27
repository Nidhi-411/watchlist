import './App.css';
import React, { useState ,  useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { login , logout } from './utils/authSlice';
import Auth from './Components/Auth';
//import Watchlist from './Components/Watchlist';
import Body from './Components/Body';
import SideBar from './Components/SideBar';



function App() {
  
  const [showAuth, setShowAuth] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    const storeduser = localStorage.getItem('user');
    if (storeduser) {
      dispatch(login(storeduser));
    }
  }, [dispatch]);

  const handleLogin = (email) => {
    dispatch(login(email));
    localStorage.setItem('user', email);
    setShowAuth(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
  };  

  return (
    <div className="flex flex-row h-screen">
      
      <SideBar user={user} onLogout={handleLogout} onLogin={() => setShowAuth(true)} />
      <Body onLogin={handleLogin} onClose={() => setShowAuth(false)  } setShowAuth={setShowAuth} />
      {showAuth && <Auth onLogin={handleLogin} onClose={() => setShowAuth(false) } topmessage={"Login to WatchList"} />}

    </div>
  );
}



export default App;
