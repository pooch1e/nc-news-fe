import { createContext, useState, useContext } from 'react';
const RefreshContext = createContext();

export const RefreshProvidor = ({ children }) => {
  const [refreshCommentsKey, setRefreshCommentsKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshCommentsKey((prev) => prev + 1);
  };

  return (
    <RefreshContext.Provider value={{ refreshCommentsKey, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);
