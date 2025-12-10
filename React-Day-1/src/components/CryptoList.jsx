import { useState, useEffect } from 'react';

function CryptoList() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        console.log("Mengambil data...");
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then((response) => response.json())
            .then((data) => {
                setCoins(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Crypto Market Watch (IDR)</h2>
            {coins.map((coin) => (
                <div key={coin.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={coin.image} alt={coin.name} width="30" />
                        <strong>{coin.name} ({coin.symbol.toUpperCase()})</strong>
                    </div>
                    <div>
                        Rp {coin.current_price.toLocaleString('id-ID')}
                    </div>
                </div>

            ))}

        </div>
    )
}

export default CryptoList;