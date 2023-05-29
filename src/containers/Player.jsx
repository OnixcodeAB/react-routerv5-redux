import React, { useEffect, useState } from "react";
import "../assets/styles/components/Player.scss";
import { connect } from "react-redux";
import { getrequestVideo } from "../actions/actions";
import Notfound from "./Notfound";

const Player = (props) => {
  const [loading, setloading] = useState(true);
  const { id } = props.match.params;
  const { playing } = props;
  const isPlaying = playing.source ? true : false;

  const handlebackButton = () => {
    props.history.goBack();
  };

  useEffect(() => {
    props.getrequestVideo(id);
    setloading(false);
    console.log(playing.source);
  }, []);

  if (loading) {
    <h1>Cargando Elementos</h1>;
  }

  return isPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handlebackButton}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Notfound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getrequestVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
