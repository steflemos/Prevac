import Icon1 from "../../images/icon1.png";
import "./cards.css"

function Cards() {
 return (
  <>
  <div className="CardContainer">

 
 <section className="CardSection">
  <div className="Card">
  <img src={Icon1} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Card Title 1</h2>
   <p className="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
   
  </div>
  <div className="Card CenterCard">
  <img src={Icon1} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Card Title 2</h2>
   <p className="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
   
  </div>
  <div className="Card">
  <img src={Icon1} alt="icon" className="CardIcon" />
   <h2 className="CardTitle">Card Title 3</h2>
   <p className="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
   
  </div>
 </section>
 </div>
  </>
 );
}

export default Cards;
