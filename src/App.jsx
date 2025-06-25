import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idTypeContext } from './context/idTypeContext';
import { RefreshProvider } from './context/refreshProvider';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import { Article } from '../src/components/articles/Article';
import { Footer } from './components/layout/Footer';
import { useState } from 'react';

function App() {
  const [postType, setPostType] = useState('article');
  return (
    <>
      <RefreshProvider>
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
      </RefreshProvider>
    </>
  );
}

export default App;
