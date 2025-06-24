import { useContext, createContext } from 'react';
export const VoteTypeContext = createContext();
export const useVoteType = () => useContext(VoteTypeContext);
