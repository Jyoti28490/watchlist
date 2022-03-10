import './App.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Watchlist from './components/Watchlist/Watchlist';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
