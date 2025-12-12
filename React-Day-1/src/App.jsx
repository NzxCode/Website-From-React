import {Routes, Route } from 'react-router-dom';
import CoinDetail from './components/CoinDetail';
import CryptoList from './components/CryptoList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <Navbar />
        <div style={{ marginTop: '20px' }}>
            <Routes>
                <Route path="/" element={<CryptoList />} />
                <Route path="/coin/:id" element={<CoinDetail />} />
            </Routes>
        </div>
    </div>
  )
}

export default App;