import { Link, useLocation } from "react-router-dom";
import imgHome from "./images/people2.png";
import laptop from "./images/laptop.png";
import grafic from "./images/grafic.png"
import LogoPrevac from "./images/logoPrevac.png"
import LogoPrevac2 from "./images/LogoPrevac2.png"
import Cards from "./components/cards/Cards";
import Footer from "../Components/Footer/Footer";
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
            <img src={LogoPrevac2} alt="People"  className="people" />
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
                <h1 className="Title-section3">Protegendo o Futuro da Segurança do Trabalho</h1>
              
                <p className="sub-title-section3">O PREVAC é um sistema de monitoramento de segurança em fábricas, usando sensores e câmeras para identificar riscos em tempo real, emitir alertas e gerar relatórios. Ele ajuda a criar um ambiente de trabalho seguro e eficiente, conforme as normas regulamentadoras, reduzindo custos e aumentando a satisfação dos funcionários.</p>
            </div>
        </section>
    </main>
    <main className="Main-Section4">
        <section className="producao-aulas2">
            <div className="content-container">
                <h1 className="Title-section4">Como Funciona o PREVAC</h1>
                <p className="sub-title-section4">Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.</p>
                <p className="sub-title-section4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia necessitatibus quaerat repellat, impedit laborum sapiente tempora veritatis quibusdam, autem iusto ipsum. Nulla sed amet, illum quas consectetur qui distinctio!</p>
            </div>
            <div className="image-container">
                  <img src={grafic} alt="Ilustração de laptop" className="ImageLaptop2" />
            </div>
        </section>
    </main>
    <Footer/>
    
</body>
</>
    );
  }
  
  export default Home;