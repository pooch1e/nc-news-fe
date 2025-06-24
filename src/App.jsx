import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import {Article} from '../src/components/articles/Article';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
