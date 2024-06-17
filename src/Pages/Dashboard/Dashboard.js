import React from 'react';
import Navigation from '../../Pages/Components/Navigation/menuNav';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <Navigation /> 
      <div className="dashboard-container">
        <main className="main-content">
          <header className="headerDashboard">
            <h1 className="header-title">Dashboard principal</h1>
            <div className="notification">
              <span className="notification-badge">4</span>
              <button className="notification-button">
                <span role="img" aria-label="notification">🔔</span>
              </button>
            </div>
            <button className="alert-button">Alerta de notificação</button>
          </header>
          <section className="sensor-status">
            <div className="status-header">
              <h2 className="status-title">Status geral dos sensores:</h2>
              <span className="status-ok">OK</span>
            </div>
            <table className="sensor-table">
              <thead>
                <tr>
                  <th className="sensor-table-header">Sensor</th>
                  <th className="sensor-table-header">Id</th>
                  <th className="sensor-table-header">Ultimo registro</th>
                  <th className="sensor-table-header">Min.</th>
                  <th className="sensor-table-header">Max.</th>
                  <th className="sensor-table-header">Configurações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="sensor-table-row">
                  <td className="sensor-table-cell">Sensor 1</td>
                  <td className="sensor-table-cell">1gd</td>
                  <td className="sensor-table-cell">22C</td>
                  <td className="sensor-table-cell">15C</td>
                  <td className="sensor-table-cell">26C</td>
                  <td className="sensor-table-cell"></td>
                </tr>
                {/* Outras linhas da tabela */}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
