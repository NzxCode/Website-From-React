import Tasbih from './Tasbih';   
import Header from './components/Header';  

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', paddingBottom: '50px' }}>
      <h1>--- Project 1: Tasbih Digital ---</h1>
      <Tasbih />
      <br /> <hr /> <br />
      <h1>--- Project 2: Voting Karakter ---</h1>
      <p>Coba like salah satu, yang lain tidak akan ikut berubah.</p>
      <Header nama="Kaido" judul="Yonko" status="Top Tier" />
      <Header nama="Akainu" judul="Admiral" status="Top Tier" />
      <Header nama="Buggy" judul="Yonko" status="Lucky Tier" />

    </div>
  )
}

export default App;