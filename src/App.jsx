import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IdTypeProvider } from './context/idTypeContext';
import { RefreshProvider } from './context/refreshProvider';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import { Article } from '../src/components/articles/Article';
import { Footer } from './components/layout/Footer';
import { TopicPage } from './components/topics/TopicPage';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <>
      <RefreshProvider>
        <UserProvider>
          <IdTypeProvider>
            <header>
              <Header />
            </header>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/articles/:article_id" element={<Article />} />
              <Route path="/topics/:topic_slug" element={<TopicPage />} />
            </Routes>
            <footer>
              <Footer />
            </footer>
          </IdTypeProvider>
        </UserProvider>
      </RefreshProvider>
    </>
  );
}

export default App;
