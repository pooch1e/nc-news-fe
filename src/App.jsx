import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticlesPage } from './components/ArticlesPage';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Articles Area</h2>
        <ArticlesPage />
      </main>
    </>
  );
}

export default App;
