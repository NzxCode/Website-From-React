import Tasbih from './Tasbih';   
import Header from './components/Header';  

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', paddingBottom: '50px' }}>
      
      {/* BAGIAN 1: LATIHAN TASBIH */}
      <h1>--- Project 1: Tasbih Digital ---</h1>
      <Tasbih />

      <br /> <hr /> <br />

      {/* BAGIAN 2: LATIHAN KARTU YONKO (Props + State) */}
      <h1>--- Project 2: Voting Karakter ---</h1>
      <p>Coba like salah satu, yang lain tidak akan ikut berubah.</p>
      
      {/* Kita panggil komponen Header berkali-kali dengan data beda */}
      <Header nama="Kaido" judul="Yonko" status="Top Tier" />
      <Header nama="Akainu" judul="Admiral" status="Top Tier" />
      <Header nama="Buggy" judul="Yonko" status="Lucky Tier" />

    </div>
  )
}

export default App;