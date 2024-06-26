import { FaBell } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import api from '../../../services/api'
import "./Alert.css"
function Alert() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [datas, setDatas] = useState()

    const toggleNotificationMenu = () => {
      setIsNotificationOpen(!isNotificationOpen);
    };


    useEffect(() => {
      api
      .get("/data")
      .then((response) => setDatas(response.data))
      .catch((err) => {console.log("ops!")})
    })

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
                    {
                      datas &&
                      datas.map((data) => (
                        <li className="notification-item" key={data.id}>{data.status}</li>
                      ))
                    }
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