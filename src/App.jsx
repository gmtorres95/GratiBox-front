import React, { useState } from 'react';
import { Outlet } from 'react-router';
import UserContext from './contexts/userContext';

export default function App() {
  const [user, setUser] = useState(localStorage.length ? JSON.parse(localStorage.getItem("user")) : undefined);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
}
