import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CryptoList() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCoins = () => {
        setLoading(true);
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
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>⏳ Sabar ya, lagi loading data update...</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Crypto Market Watch (IDR)</h2>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button 
                    onClick={fetchCoins} 
                    style={{ 
                        padding: '10px 20px', 
                        cursor: 'pointer', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        fontSize: '16px' 
                    }}
                >
                    🔄 Update Harga
                </button>
            </div>

            {coins.map((coin) => (
                <Link 
                    to={`/coin/${coin.id}`} 
                    key={coin.id} 
                    style={{ 
                        textDecoration: 'none', 
                        color: 'inherit', 
                        display: 'block' 
                    }}
                >
                    <div 
                        style={{ 
                            border: '1px solid #ddd', 
                            padding: '15px', 
                            marginBottom: '10px', 
                            borderRadius: '8px',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
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
                </Link>
            ))}
        </div>
    );
}

export default CryptoList;