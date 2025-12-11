import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CoinDetail () {
    const { id } = useParams();

    const [coins, setCoins] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCoins(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Gagal ambil data", error);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>⏳ Sedang membedah data {id}...</div>;
    }

    if (!coins) {
        return <div style={{ textAlign: 'center' }}>Data tidak ditemukan 😭</div>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', fontSize: '20px' }}>⬅️ Kembali ke Home</Link>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img src={coins.image.large} alt={coins.name} style={{ height: '100px' }} />
                <h1>{coins.name} ({coins.symbol.toUpperCase()})</h1>
                <p style={{ fontSize: '18px', color: 'gray' }}>Rank #{coins.market_cap_rank}</p>
            </div>

            <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#f9f9f9', 
                borderRadius: '10px',
                lineHeight: '1.6' 
            }}>
                <h3>Tentang {coins.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: coins.description.en || "Tidak ada deskripsi." }} />
            </div>
            
        </div>
    );
}

export default CoinDetail;