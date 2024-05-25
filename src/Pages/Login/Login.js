import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./login.css"

const Login  = () => {
    return(
<body className="bodyhome">
    <section className="sectionHome">
        <div className="containerHome">
            <div className="imageHome">
                <article className="FormHome">
                    <div className="Formulario">
                        <div className="TitulosHome">
                        <h1 className="title1">Olá!</h1>
                        <h1 className="title1">Seja bem vindo de volta.</h1>
                        </div>                       
                        <p className="pLogin">Faça o seu login</p>
                        <div className="containerInputs">
                        <input placeholder="E-mail" className="InputFormHome"></input>
                        <input placeholder="Senha" type="password" className="InputFormHome"></input>
                        <p className="pLogin2">Esqueceu a sua senha? <a href="#" className="linkHome">Clique Aqui</a></p>
                        </div>
                        <div className="DivButton">
                        <Link to='/navigation' className="linkbutton">Login</Link>
                            {/* <button className="buttonLogin">Login</button> */}
                        </div>
                    </div>
                </article>                
            </div>
           
        </div>

    </section>
    
</body>

    )
}
export default Login;