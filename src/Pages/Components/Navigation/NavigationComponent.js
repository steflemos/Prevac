import "./nav.css";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";




function Navigationteste() {
    return (
      <div>
        <>
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
                </ul>
            </nav>
        </div>
        
        </>
        
        
      </div>
    );
  }
  
  export default Navigationteste;