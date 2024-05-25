import "./nav.css";
import { FaBars } from "react-icons/fa";

function Navigationteste() {
    return (
      <div>
        <>
        <div className="BodyNav">
            <nav className="menu-lateral">
                <div className="btn-expandir">
                    <i className="bi bi-list" id="btn-exp"><FaBars/></i>
                </div>
                <ul className="ulNav">
                    <li className="item-menu ativo">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><i> </i></span>
                            <span className="txt-link">Home</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><i className="bi bi-columns-gap"></i></span>
                            <span className="txt-link">Dashboard</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><i className="bi bi-calendar3"></i></span>
                            <span className="txt-link">Agenda</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><i className="bi bi-gear"></i></span>
                            <span className="txt-link">Configurações</span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a className="aLinkNav" href="#">
                            <span className="icon"><i className="bi bi-person-circle"></i></span>
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