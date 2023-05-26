import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import googleIcon from "../assets/static/google-icon.png";
import twiterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";
import { connect } from "react-redux";
import { loginRequest } from "../actions/actions";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });
  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push("/")
    console.log(form);
  };

  return (
    <>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={onSubmit}>
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Correo"
              onChange={onChange}
            />

            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={onChange}
            />

            <button type="submit" className="button">
              Iniciar sesión
            </button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twiterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Registrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
