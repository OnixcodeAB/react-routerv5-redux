import React, { useState } from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { registerRequest } from "../actions/actions";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValues] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form)
    props.history.push("/")
    //console.log(form);
  };

  return (
    <>
    <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="nombre"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={onChange}
            />

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
              type="passwo
            rd"
              placeholder="Contraseña"
              onChange={onChange}
            />

            <button type="submit" className="button">
              Registrarme
            </button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
