import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticlesPage } from './components/ArticlesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
