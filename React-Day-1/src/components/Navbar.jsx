import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: '#1a1a1a', 
            color: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                Nico's Market
            </Link>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#ddd', fontSize: '16px' }}>Home</Link>
                <a href="#" style={{ textDecoration: 'none', color: '#ddd', fontSize: '16px' }}>About</a>
            </div>
        </nav>
    );
}

export default Navbar;