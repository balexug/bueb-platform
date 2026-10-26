import './App.css'

function App() {

  return (
    <>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>BÜB Assist - Admin Panel</h1>
        <p>Willkommen im geschützten Verwaltungsbereich.</p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>System-Status</h2>
          <ul>
            <li>Datenbank: Verbunden</li>
            <li>Aktive Benutzer: 0</li>
            <li>Offene BTBs: 0</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App