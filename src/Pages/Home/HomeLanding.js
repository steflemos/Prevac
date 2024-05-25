import { Link, useLocation } from "react-router-dom";
import imgHome from "./images/people2.png";
import LogoPrevac from "./images/logoPrevac.png"
import "./home.css";

function Home() {
    return (
<>
<body className="HomeLandingPage">
    <nav className="header">
        <div className="divlogo">
           
            <img src={LogoPrevac} alt="People"  className="logoPrevac" />
        </div>
        <div className="optionsHeader">

            <a href="#home" className="optionSelect" >Home</a>

           <a  href="#recursos" className="optionSelect">Serviços</a>

            <a href="#contrate"className="optionSelect">Sobre</a>

            <Link to='/login' className="optionSelect2">Login</Link>

    </div>
    </nav>
    <section className="landingPage">
        <div className="titulos">
            <h1 className="titleHome">Bem-vindo ao </h1>
            <h1 className="titleHome1">Prevac</h1>
            <h1 className="titleHome2">Monitoramento inteligente, prevenção eficiente!</h1>
            <p className="sub-titleHome">Nossa missão é assegurar a saúde e integridade
                 física dos colaboradores, além de proteger a empresa 
                 de possíveis penalizações.</p>
                 
            <button>FAÇA PARTE</button>
        </div>
        <div className="imglandingpage">
            <img src={imgHome} alt="People"  className="people" />
        </div>
       
    </section>
    <section className="cards">
        <div>
            {/* <img src="images/icon2.png" alt="Icon 1"> */}
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
        </div>
        <div>
            {/* <img src="images/icon1.png" alt="Icon 2"> */}
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
        </div>
        <div>
            {/* <img src="images/icon3.png" alt="Icon 3"> */}
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
        </div>
    </section>
    <footer>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
        <button>FALE CONOSCO</button>
    </footer>
</body>
</>
    );
  }
  
  export default Home;