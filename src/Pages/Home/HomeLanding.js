import { Link, useLocation } from "react-router-dom";
import imgHome from "./images/people2.png";
import laptop from "./images/laptop.png"
import LogoPrevac from "./images/logoPrevac.png"
import Cards from "./components/cards/Cards";
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

            <h1 className="titleHome1">Monitoramento inteligente, prevenção eficiente!</h1>
            <p className="sub-titleHome">Nossa missão é assegurar a saúde e integridade
                 física dos colaboradores, além de proteger a empresa 
                 de possíveis penalizações.</p>

                 <Link to='/configuracoes' className="buttonLandingPage">FAÇA PARTE</Link>

        </div>
        <div className="imglandingpage">
            <img src={imgHome} alt="People"  className="people" />
        </div>
       
    </section>
    {/* Componente de cards */}
    <Cards/>
    <main className="Main-Section3">
        <section className="producao-aulas">
            <div className="image-container">
                  <img src={laptop} alt="Ilustração de laptop" className="ImageLaptop" />
            </div>
            <div className="content-container">
                <h1 className="Title-section3">Lorem ipsum dolor sit amet </h1>
                <p className="sub-title-section3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia necessitatibus quaerat repellat, impedit laborum sapiente tempora veritatis quibusdam, autem iusto ipsum. Nulla sed amet, illum quas consectetur qui distinctio!</p>
                <p className="sub-title-section3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia necessitatibus quaerat repellat, impedit laborum sapiente tempora veritatis quibusdam, autem iusto ipsum. Nulla sed amet, illum quas consectetur qui distinctio!</p>
            </div>
        </section>
    </main>
</body>
</>
    );
  }
  
  export default Home;