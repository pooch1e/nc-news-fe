import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idTypeContext } from './context/idTypeContext';
import { RefreshProvider } from './context/refreshProvider';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import { Article } from '../src/components/articles/Article';
import { Footer } from './components/layout/Footer';
import { createContext, useState } from 'react';

function App() {
  const UserContext = createContext(null);
  const [postType, setPostType] = useState('article');
  const [currentUser, setCurrentUser] = useState({ username: 'tickle122' });
  return (
    <>
      <RefreshProvider>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <idTypeContext.Provider value={{ postType, setPostType }}>
            <header>
              <Header />
            </header>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/articles/:article_id" element={<Article />} />
            </Routes>
            <footer>
              <Footer />
            </footer>
          </idTypeContext.Provider>
        </UserContext.Provider>
      </RefreshProvider>
    </>
  );
}

export default App;
