import React from "react";
import "./home.css"
import imageHome from "../../imagens/imageHome.png";

const Home  = () => {
    return(


    <div className="ContainerHome">

        <section className="sectionHome">
            
        <div className="imageHome">
                <img src={imageHome} className="imagehome"></img>
        </div>
        <div className="formHome">
            <div>
                <h1>Olá</h1>
                <h1>Será bem vindo de volta.</h1>
            </div>

            <div>
                <h1>Faça o seu login!</h1>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>

                <h1>Esqueceu sua senha? Clique Aqui</h1>

                <button>Login</button>
             </div>
        </div>

        </section>

    </div>

    )
}
export default Home;