import { useContext, createContext, useState } from 'react';
export const idTypeContext = createContext();
export const useIdType = () => useContext(idTypeContext);

export const IdTypeProvider = ({ children }) => {
  const [postType, setPostType] = useState('article'); // default value

  return (
    <idTypeContext.Provider value={{ postType, setPostType }}>
      {children}
    </idTypeContext.Provider>
  );
};
