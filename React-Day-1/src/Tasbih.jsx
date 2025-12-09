import { useState } from 'react';

function Tasbih () {
    const {angka, setAngka} = useState(0);

    const tambah = () => setAngka(angka + 1);

    const kurang = () => {
        if (angka > 0) {
            setAngka(angka - 1);
        } else {
            alert("Gak boleh minus, ngab!");
        }
    };

    const reset = () => setAngka(0);

    return (
        <div style={{ border: '2px solid #333', padding: '20px', margin: '20px', borderRadius: '10px' }}>
            <h2>Tasbih Digital</h2>
            <h1 style={{ fontSize: '80px', margin: '10px' }}>{angka}</h1>

            <div style={{ gap: '10px', display: 'flex', justifyContent: 'center' }}>
                <button onClick={kurang}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={tambah}>+</button>
            </div>
        </div>
    );
}