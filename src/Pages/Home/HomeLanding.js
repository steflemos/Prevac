import { Link, useLocation } from "react-router-dom";
import laptop from "../../imagens/laptop.png";
import grafic from "../../imagens/grafic.png"
import LogoPrevac from "../../imagens/logoPrevac.png"
import LogoPrevac2 from "../../imagens/people.png"
import Cards from "../Components/cards/Cards";
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
                        <a href="#recursos" className="optionSelect">Serviços</a>
                        <a href="#sobre" className="optionSelect">Sobre</a>
                        <a href="#como-funciona" className="optionSelect">Como Funciona</a>
                        <Link to='/login' className="optionSelect2">Login</Link>
                    </div>
    </nav>
    <section  id="home" className="homePage">
        <div className="container-homePage">

          <div className="contentHome">
            <h1 className="titleHomePage">Monitoramento inteligente, prevenção eficiente!</h1>
            <p className="descriptionPageHome">
            Nossa missão é assegurar a saúde e integridade
                 física dos colaboradores, além de proteger a empresa 
                 de possíveis penalizações.
            </p>
           <Link to='/Registration' className="buttonHome-a">FAÇA PARTE</Link>
          </div>

          <div className="image-containerHomePage">
            <div className="imagePage">
              <img src={LogoPrevac2} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
            
            </div>
          </div>


        </div>
      </section>
    {/* Componente de cards */}
    <section  id="recursos">
      <Cards/>
    </section>
  
<section  id="sobre" className="homePage">
        <div className="container-homePage">
        <div className="image-containerHomePage">
            <div className="imagePage">
              <img src={laptop} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
            </div>
          </div>

          <div className="contentHome">
            <h1 className="titleHomePage2">Protegendo o Futuro da Segurança do Trabalho</h1>
            <p className="descriptionPageHome2">
            O PREVAC é um sistema de monitoramento de segurança em fábricas, usando sensores e câmeras para identificar riscos em tempo real, emitir alertas e gerar relatórios. 
            Ele ajuda a criar um ambiente de trabalho seguro e eficiente, conforme as normas regulamentadoras, reduzindo custos e aumentando a satisfação dos funcionários.
            </p>
          </div>

        </div>
      </section>

<section id="como-funciona" className="homePage4">
        <div className="container-homePage">

          <div className="contentHome">
            <h1 className="titleHomePage3">Como Funciona o PREVAC</h1>
            <p className="descriptionPageHome3">
            Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.
            </p>
            <p className="descriptionPageHome3">
            Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.
            </p>
          </div>

          <div className="image-containerHomePage">
            <div className="imagePage2">
              <img src={grafic} alt="home image"  />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
            </div>
          </div>

        </div>
      </section>
    <Footer/>
    
</body>
</>
    );
  }
  
  export default Home;