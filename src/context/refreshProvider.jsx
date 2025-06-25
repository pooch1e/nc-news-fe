import { useState } from 'react';
import { RefreshContext } from './refreshContext'; // Import the context

export const RefreshProvider = ({ children }) => {
  const [refreshCommentsKey, setRefreshCommentsKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshCommentsKey((prev) => prev + 1);
  };

  const value = {
    refreshCommentsKey,
    triggerRefresh,
  };

  return (
    <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>
  );
};
