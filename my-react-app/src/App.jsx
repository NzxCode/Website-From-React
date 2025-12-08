import Header from './components/Header';

function App() {
  const nama = "Nicolas";
return (
  <div>
    <h1>Hi! nama gw {nama} List-List Props Terbaik! Dalam hal top tiernya</h1>
    <Header judul ="Yonko" status ="Top Tier" nama ="Kaido" />
    <Header judul ="Admiral" status ="Top Tier" nama ="Akainu" />
  </div>
  )
}

export default App;