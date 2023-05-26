import React from "react";
import prototypes from 'prop-types'
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { gravatar } from "../utils/gravatar";
import { object } from "prop-types";
import { logoutRequest } from "../actions/actions";


const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user)?.length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
    //props.history.push("/");
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.nombre}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <Link to="/" onClick={handleLogout}>
                {" "}
                Cerrar Sesion
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login"> Iniciar Sesion</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.prototypes={
  user: prototypes.object,
  logoutRequest: prototypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
