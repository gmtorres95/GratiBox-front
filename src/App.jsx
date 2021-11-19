import React, { useState } from 'react';
import { Outlet } from 'react-router';
import UserContext from './contexts/userContext';

export default function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
}
