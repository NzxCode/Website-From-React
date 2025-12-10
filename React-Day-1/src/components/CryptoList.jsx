import { useState, useEffect } from 'react';

function CryptoList() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Mengambil data...");
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then((response) => response.json())
            .then((data) => {
                setCoins(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    if(loading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Sabar cuy, lagi loading....</div>
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Crypto Market Watch (IDR)</h2>

            {coins.map((coin) => (
                <div 
                    key={coin.id} 
                    style={{ 
                        border: '1px solid #ddd', 
                        padding: '15px', 
                        marginBottom: '10px', 
                        borderRadius: '8px',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src={coin.image} alt={coin.name} width="40" />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{coin.name}</span>
                            <span style={{ fontSize: '14px', color: 'gray' }}>{coin.symbol.toUpperCase()}</span>
                        </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>
                           Rp {coin.current_price.toLocaleString('id-ID')}
                        </div>
                        
                        <div style={{ 
                            fontSize: '14px',
                            fontWeight: 'bold', 
                            marginTop: '5px',
                            color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' 
                        }}>
                            {coin.price_change_percentage_24h > 0 ? '+' : ''}
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CryptoList;