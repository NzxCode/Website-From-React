function Header (props) {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', marginBottom: '10px' }}>
            <h2>{props.judul}</h2>
            <p>{props.status}</p>
            <p>{props.nama}</p>
        </div>
    );
}

export default Header;