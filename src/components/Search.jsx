import React, { useState } from "react";
import "../assets/styles/components/Search.scss";
import classNames from "classnames";
import { getVideoSearch } from "../actions/actions";
import { connect } from "react-redux";

const Search = ({ isHome, getVideoSearch }) => {
  const [search, setsearch] = useState("");

  const inputStyle = classNames("input", {
    isHome,
  });

  const onChange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
    console.log(search);
    getVideoSearch(e.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={onChange}/>
    </section>
  );
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(null, mapDispatchToProps)(Search);
