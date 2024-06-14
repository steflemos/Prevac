import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./login.css"

const Login  = () => {
    return(
<body className="bodyhome">
    <section className="sectionHome">
        <div className="containerHome">
            <div className="imageHome">
            <div className="login-form">
          <h1>Olá!</h1>
          <h1>Seja bem vindo de volta.</h1>
          <p>Faça o seu login!</p>
          <form>
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">senha</label>
            <input type="password" id="password" name="password" required />
            <a href="#" className="forgot-password">Esqueceu a sua senha?</a>
            <Link type="submit" to='/navigation'className="ButtonLoginLink">Login</Link>
          </form>
        </div>          
            </div>
           
        </div>

    </section>
    
</body>

    )
}
export default Login;