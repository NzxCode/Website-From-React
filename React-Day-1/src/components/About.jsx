import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Tentang Aplikasi Crypto Ini!</h1>
            <p>Aplikasi ini berguna buat kalian untuk melihat harga crypto secara real-time.</p>

            <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                <h3>Front-End Developer</h3>
                <p>Nama: <strong>Nicolas Gabriel Kurnadi</strong></p>
                <p>Universitas Tarumanagara</p>
                <p>Stack: React.js + Vite</p>
            </div>
            <Link to="/" style={{ display: 'inline-block', marginTop: '20px', color: '#007bff' }}>
                ⬅️ Kembali ke Home
            </Link>
        </div>
    );
}

export default About;