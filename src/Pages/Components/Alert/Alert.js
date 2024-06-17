import { FaBell } from "react-icons/fa";
import React, { useState } from 'react';
import "./Alert.css"
function Alert() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotificationMenu = () => {
      setIsNotificationOpen(!isNotificationOpen);
    };
    return (
        <>
        <header className="headerDashboard">
            <h1 className="header-title">Dashboard principal</h1>
            <div className="notification-wrapper">
              <div className="notification">
                <span className="notification-badge">4</span>
                <button className="notification-button" onClick={toggleNotificationMenu}>
                 <FaBell className='iconNotification'/>
                </button>
              </div>
              {isNotificationOpen && (
                <div className="notification-menu">
                  <div className="notification-header">
                    <h3>Notificações</h3>
                    <span className="notification-count">4</span>
                  </div>
                  <ul className="notification-list">
                    <li className="notification-item">Extintor próximo da validade.</li>
                    <li className="notification-item">Formulário de incidente preenchido.</li>
                    <li className="notification-item">Relatório de incidência pronto para análise.</li>
                    <li className="notification-item">Relatório de incidência pronto para análise.</li>
                    <li className="notification-item">Formulário de incidente preenchido.</li>
                    <li className="notification-item">Formulário de incidente preenchido.</li>
                    <li className="notification-item">Formulário de Taxa de Frequência de...</li>
                    <li className="notification-item">Extintor próximo da validade.</li>
                    <li className="notification-item">Relatório de incidência pronto para análise.</li>
                    <li className="notification-item">Formulário de incidente preenchido.</li>
                    <li className="notification-item">Formulário de incidente preenchido.</li>
                  </ul>
                </div>
              )}
              <button className="alert-button">Alerta de notificação</button>
            </div>
          </header>
        </>
    )
}

export default Alert;