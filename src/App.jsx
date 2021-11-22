import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import UserContext from './contexts/userContext';

export default function App() {
  const [user, setUser] = useState(localStorage.length ? JSON.parse(localStorage.getItem("user")) : undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if(!!user) navigate('/main');
  }, [user, navigate]);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
}
