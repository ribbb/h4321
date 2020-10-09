import React, { Component } from "react";
import logo from "../images/image001.png";
class LandingPage extends Component {
  //state = {  }
  render() {
    let style = {
      width: "70%",
      margin: "0 auto",
      paddingTop: "5%",
      paddingBottom: "20px",
    };
    let buttonSyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
    };
    let center = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
      minWidth: "300px",
    };
    return (
      <div style={style}>
        <img src={logo} style={center}></img>
        <p>
          Ruokavaliolla on keskeinen merkitys terveyden ja hyvinvoinnin
          ylläpitämisessä. Testaa ruokavaliosi laatu vastaamalla seuraaviin
          kysymyksiin. Kysymykset on kehitetty DEHKON 2D-hankkeessa, ja niiden
          pohjalta laskettu RUOKAVALIOINDEKSI StopDia-hankkeessa.{" "}
        </p>
        <br />
        <br />
        <p>
          RUOKAVALIOINDEKSI kuvaa sitä, miten hyvin nykyinen tapasi syödä on
          linjassa ravitsemussuositusten ja tyypin 2 diabetekselta suojaavan
          ruokavalion kanssa. Kysymykset on jaettu seitsemään osioon.
          Vastattuasi kaikkiin kysymyksiin saat arvion ruokavaliosi laadusta.
        </p>
        <br />
        <p>Vastauksiasi ei tallenneta minnekkään.</p>
        <br />
        <button
          className="btn btn-success btn-lg"
          style={buttonSyle}
          onClick={this.props.handleClick}
        >
          Avaa kysely
        </button>
      </div>
    );
  }
}

export default LandingPage;
