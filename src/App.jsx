import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Articles } from './components/articles/Articles';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Articles Area</h2>
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
