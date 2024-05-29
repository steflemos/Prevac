import Icon1 from "../../images/icon1.png";
import "./cards.css"

function Cards() {
    return (
        <>
        <div className="ContainerSection">

       
       <section class="secao-cartoes">
        <div class="cartao">
        <img src={Icon1} alt="icon"  className="imgIconCard" />
            <h2 className="TitleCard">Título do Cartão 1</h2>
            <p className="TextCards">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
            
        </div>
        <div class="cartaoCentro">
        <img src={Icon1} alt="icon"  className="imgIconCard" />
            <h2 className="TitleCard">Título do Cartão 2</h2>
            <p className="TextCards">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
            
        </div>
        <div class="cartao">
        <img src={Icon1} alt="icon"  className="imgIconCard" />
            <h2 className="TitleCard">Título do Cartão 3</h2>
            <p className="TextCards">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus vitae libero varius fermentum.</p>
            
        </div>
    </section>
    </div>
        </>
    );
}

export default Cards;