import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import "./cards.css"

function Cards() {
 return (
  <>
  <div className="CardContainer">

 
 <section className="CardSection">
  <div className="Card">
  <img src={Icon1} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Relatórios Detalhados e Customizáveis</h2>
   <p className="CardText">Relatórios que ajudam na análise de dados históricos e na tomada de decisões estratégicas.</p>
   
  </div>
  <div className="Card CenterCard">
  <img src={Icon3} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Suporte Técnico Especializado</h2>
   <p className="CardText">Disponibilizamos uma equipe de suporte técnico especializada, pronta para auxiliar na implementação, manutenção e atualização do sistema.</p>
   
  </div>
  <div className="Card">
  <img src={Icon2} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Integrações com Dispositivos IOT</h2>
   <p className="CardText">Nosso sistema se integra facilmente com diversos dispositivos IOT, como sensores, atuadores, e muito mais.</p>
   
  </div>
 </section>
 </div>
  </>
 );
}

export default Cards;
