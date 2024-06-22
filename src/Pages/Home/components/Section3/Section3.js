import Worker2 from "../../../../imagens/men2.png";
import "./Section3.css"

// SESSÃO COMO FUNCIONA
function Section3() {
    return (
        <div className="container-homePage">
        <div className="contentHome">
          <h1 className="titleHomePage3">Como Funciona o PREVAC</h1>
          <p className="descriptionPageHome3">
            Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.
          </p>
        </div>
        <div className="image-containerHomePage">
          <div className="imagePage2">
            <img src={Worker2} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse blue"></div>
          </div>
        </div>
      </div>
    )

}
export default Section3;