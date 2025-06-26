import { createContext } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const loggedInUser = { name: 'tickle122', id: 0 };

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
