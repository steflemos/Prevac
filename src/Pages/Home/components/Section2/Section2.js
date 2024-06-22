import Worker from "../../../../imagens/men.png";
import "./Section2.css"

// SESSÃO SOBRE

function Section2() {
    return (
        <div className="container-homePage">
          <div className="image-containerHomePage">
            <div className="imagePage">
              <img src={Worker} alt="home image" />
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
    )

}
export default Section2;