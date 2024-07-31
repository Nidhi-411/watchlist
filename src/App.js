import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./utils/authSlice";
import Auth from "./Components/Auth";
//import Watchlist from './Components/Watchlist';
import Body from "./Components/Body";
import SideBar from "./Components/SideBar";
import watchlistSlice, { setWatchlist } from "./utils/watchlistSlice";
import Watchlist from "./Components/Watchlist";


function App() {

  const [showAuth, setShowAuth] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const watchlist = useSelector((state) => state.watchlist.watchlists[user] || []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedWatchlists = JSON.parse(localStorage.getItem('watchlists')) || {};
    if (storedUser) {
      dispatch(login(storedUser));
      dispatch(setWatchlist({ email: storedUser, watchlist: storedWatchlists[storedUser] || [] }));
    }
  }, [dispatch]);

  const handleLogin = (email) => {
    dispatch(login(email));
    localStorage.setItem("user", email);
    setShowAuth(false);
    dispatch(setWatchlist(email , watchlist[user]))
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SideBar
        user={user}
        onLogout={handleLogout}
        onLogin={() => setShowAuth(true)}
      />
      <Body
        onLogin={handleLogin}
        onClose={() => setShowAuth(false)}
        setShowAuth={setShowAuth}
      />
      {showAuth && (
        <Auth
          onLogin={handleLogin}
          onClose={() => setShowAuth(false)}
          topmessage={"Login to WatchList"}
        />
      )}
    </div>
  );
}

export default App;
