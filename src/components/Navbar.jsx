function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        backgroundColor: '#790f9c',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '22px' }}>
        Dashboard de Ciencia de Datos
      </h1>
      <span>DENISSE PINEDA VALENCIA</span>
    </nav>
  )
}

export default Navbar