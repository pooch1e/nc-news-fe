import { createContext } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const loggedInUser = { name: 'test1', id: 6 };

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
