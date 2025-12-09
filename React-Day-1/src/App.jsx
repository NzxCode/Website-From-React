import { useState } from 'react';

function App() {
  const [App, setApp] = useState({
    brand: "Nvidia",
    model: "Prototype",
    year: "2007",
    color: "Biru"
  });

  function SapaUser() {
    console.log("Tombol berhasil ditekan! Pesan ini dari Console.");
    alert("Tombol ditekan!");
  }

  const updateColor = () => {
    setApp(previousState => {
      return {... previousState, color : "yellow" }
    });
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Selamat Datang di Web {App.brand}</h1>
      <p>Brand ini sudah ada mulai dari model {App.model} yang berwarna {App.color} dibuat pada tahun {App.year}</p>
      <button type="button" onClick={updateColor} style={{ padding: '10px 20px', fontSize: '16px' }}>Klik Saya!</button>
      <button onClick={sapaUser} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Coba Sapa!
      </button>
    </div>
  )
}

export default App