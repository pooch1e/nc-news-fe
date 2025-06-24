import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticlesPage } from './components/articles/ArticlesPage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Articles Area</h2>
        <ArticlesPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
