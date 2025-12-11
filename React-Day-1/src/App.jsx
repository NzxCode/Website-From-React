import {Routes, Route } from 'react-router-dom';
import Menu from './Main_Menu'; 
import CoinDetail from './components/CoinDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/coin/:id" element={<CoinDetail />} />
    </Routes>
  )
}

export default App;