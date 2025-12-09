import { useState } from 'react'; 

function Header(props) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div style={{ 
            backgroundColor: '#222', 
            color: 'white', 
            padding: '20px', 
            margin: '10px auto', 
            borderRadius: '10px',
            maxWidth: '400px',
            textAlign: 'left' 
        }}>
            <h2 style={{ color: 'gold' }}>{props.nama}</h2>
            <p>Jatab: {props.judul}</p>
            <p>Status: {props.status}</p>

            {/* Garis Pembatas */}
            <hr style={{ margin: '15px 0', borderColor: '#444' }} />

            {/* Bagian Interaktif (State) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button 
                    onClick={handleLike} 
                    style={{ 
                        padding: '10px 20px', 
                        cursor: 'pointer',
                        backgroundColor: likes > 0 ? '#ff4081' : 'gray', 
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    ❤️ Like
                </button>

                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    {likes} Orang menyukai ini
                </span>
            </div>
        </div>
    );
}

export default Header;