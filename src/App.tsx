import { useState } from 'react'
import './App.css'

// Das sind unsere Testdaten (Dummy-Daten)
const dummyBTBs = [
  { id: '2026-10-26-001', projekt: 'Bf Pasing · Weiche 12', datum: '26.10.2026', bearbeiter: 'T. Schmidt', status: 'Freigegeben' },
  { id: '2026-10-26-002', projekt: 'Bf München Hbf · Gleis 4', datum: '26.10.2026', bearbeiter: 'M. Weber', status: 'Entwurf' },
  { id: '2026-10-25-014', projekt: 'Strecke 4000 · km 8,4', datum: '25.10.2026', bearbeiter: 'A. Müller', status: 'Prüfung' },
]

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            <div className="header">
              <h2>Dashboard</h2>
              <p>Willkommen im Admin-Panel von BÜB Assist.</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Aktive Projekte</h3>
                <div className="value">0</div>
              </div>
              <div className="card">
                <h3>Offene BTBs</h3>
                <div className="value">3</div>
              </div>
              <div className="card">
                <h3>Benutzer</h3>
                <div className="value">0</div>
              </div>
            </div>
          </>
        )
      case 'projects':
        return (
          <div className="header">
            <h2>Projekte</h2>
            <p>Hier werden später alle Bahnprojekte verwaltet.</p>
          </div>
        )
      case 'btbs':
        return (
          <>
            <div className="header">
              <h2>Bautagesberichte (BTBs)</h2>
              <p>Übersicht aller eingereichten Berichte.</p>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>BTB Nr.</th>
                  <th>Projekt</th>
                  <th>Datum</th>
                  <th>Bearbeiter</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyBTBs.map((btb) => (
                  <tr key={btb.id}>
                    <td>{btb.id}</td>
                    <td>{btb.projekt}</td>
                    <td>{btb.datum}</td>
                    <td>{btb.bearbeiter}</td>
                    <td>
                      <span className={`status ${btb.status.toLowerCase()}`}>
                        {btb.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      case 'users':
        return (
          <div className="header">
            <h2>Benutzer</h2>
            <p>Mitarbeiter, Rollen und Qualifikationen.</p>
          </div>
        )
      case 'settings':
        return (
          <div className="header">
            <h2>Einstellungen</h2>
            <p>Systemkonfiguration und Quellenverwaltung.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <h1>BÜB Assist</h1>
        <div className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => setActivePage('dashboard')}>Dashboard</div>
        <div className={`nav-item ${activePage === 'projects' ? 'active' : ''}`} onClick={() => setActivePage('projects')}>Projekte</div>
        <div className={`nav-item ${activePage === 'btbs' ? 'active' : ''}`} onClick={() => setActivePage('btbs')}>BTBs</div>
        <div className={`nav-item ${activePage === 'users' ? 'active' : ''}`} onClick={() => setActivePage('users')}>Benutzer</div>
        <div className={`nav-item ${activePage === 'settings' ? 'active' : ''}`} onClick={() => setActivePage('settings')}>Einstellungen</div>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default App