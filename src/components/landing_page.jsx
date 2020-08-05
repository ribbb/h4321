import React, { Component } from "react";

class LandingPage extends Component {
  //state = {  }
  render() {
    let style = {
      width: "70%",
      margin: "0 auto",
      paddingTop: "5%",
    };
    let buttonSyle = {
      margin: "0",
      position: "absolute",
      left: "50%",
    };
    return (
      <div style={style}>
        <h3>
          Ruokavaliolla on keskeinen merkitys terveyden ja hyvinvoinnin
          ylläpitämisessä. Testaa ruokavaliosi laatu vastaamalla seuraaviin
          kysymyksiin. Kysymykset on kehitetty DEHKON 2D-hankkeessa, ja niiden
          pohjalta laskettu RUOKAVALIOINDEKSI StopDia-hankkeessa.{" "}
        </h3>
        <br />
        <br />
        <h3>
          RUOKAVALIOINDEKSI kuvaa sitä, miten hyvin nykyinen tapasi syödä on
          linjassa ravitsemussuositusten ja tyypin 2 diabetekselta suojaavan
          ruokavalion kanssa. Kysymykset on jaettu seitsemään osioon.
          Vastattuasi kaikkiin kysymyksiin saat arvion ruokavaliosi laadusta.
        </h3>
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
