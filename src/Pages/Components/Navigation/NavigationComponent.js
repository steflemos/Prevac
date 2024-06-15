import "./nav.css";
import { FaBars, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigationteste() {
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleLogoutClick = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirmLogout = () => {
        setShowConfirm(false);
        navigate('/');
    };

    const handleCancelLogout = () => {
        setShowConfirm(false);
    };

    return (
      <div>
        <div className="BodyNav">
            <nav className="menu-lateral">
                <div className="btn-expandir">
                    <i id="btn-exp"><FaBars/></i>
                </div>
                <ul className="ulNav">
                    <li className="item-menu ativo">
                        <a className="aLinkNav" href="#">
                            <span className="icon"> <FaHome className="home"/></span>
                            <span className="txt-link">Home</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><MdAssessment /></span>
                            <span className="txt-link">Dashboard</span>
                        </a>
                    </li>
                  
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><IoSettingsSharp/></span>
                            <span className="txt-link">Configurações</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><FaUserCircle /></span>
                            <span className="txt-link">Conta</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a href="/" className="aLinkNav" onClick={handleLogoutClick}>
                            <span className="icon2"><FaSignOutAlt /></span>
                            <span className="txt-link">Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        {showConfirm && (
            <div className="confirm-popup">
                <div className="confirm-popup-content">
                    <p>Você tem certeza que deseja sair?</p>
                    <button onClick={handleConfirmLogout}>Sim</button>
                    <button onClick={handleCancelLogout}>Não</button>
                </div>
            </div>
        )}
      </div>
    );
}

export default Navigationteste;
