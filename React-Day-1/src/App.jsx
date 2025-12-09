import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    brand: "Nvidia",
    model: "RTX 4090",
    year: "2024",
    color: "Biru"
  });

  function SapaUser() {
    console.log("Tombol ditekan!");
    alert("Halo Nicolas!");
  }

  // Fungsi Ubah Warna
  const updateColor = () => {
    setData(previousState => {
      return { ...previousState, color: "Yellow (Emas)" }
    });
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Selamat Datang di Web {data.brand}</h1>
      <p>
        Model: {data.model} | Tahun: {data.year} | Warna: 
        <b style={{ color: data.color === 'Biru' ? 'blue' : 'gold' }}> {data.color}</b>
      </p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={updateColor} style={{ marginRight: '10px', padding: '10px' }}>
          Ubah Warna
        </button>
        <button onClick={SapaUser} style={{ padding: '10px' }}>
          Sapa Saya
        </button>
      </div>
    </div>
  )
}

export default App