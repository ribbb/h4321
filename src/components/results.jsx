import React, { Component } from "react";
import Canvas from "./canvas";

class Results extends Component {
  state = {};
  render() {
    /*
     /*
    domains: [
      "Ruokarytmi",
      "Vilja",
      "Hedelmät ja Vihannekset",
      "Rasvat",
      "Kala ja liha",
      "Maidot",
      "Sattumat",
      "Results",
    ],
    dietary_pattern_score: 0,
    grains_score: 0,
    fruit_and_vegetables_score: 0,
    fats_score: 0,
    meat_fish_score: 0,
    dairy_score: 0,
    sugar_drink_score: 0,
      */
    const flexcontainer = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    let kokonaispisteet =
      this.props.all.dietary_pattern_score +
      this.props.all.grains_score +
      this.props.all.fruit_and_vegetables_score +
      this.props.all.fats_score +
      this.props.all.meat_fish_score +
      this.props.all.dairy_score +
      this.props.all.sugar_drink_score;
    let main_score_message = "";
    if (kokonaispisteet > 79) {
      main_score_message = "Ruokavaliosi on suositusten mukainen, hienoa!";
    } else if (kokonaispisteet > 59) {
      main_score_message =
        "Ruokavaliosi on lähellä suosituksia – vieläkö keksit kohennettavaa? ";
    } else if (kokonaispisteet > 39) {
      main_score_message =
        "Ruokavaliosi on keskimääräisellä tasolla, ja valintoja viilaamalla se kohenee entisestään.";
    } else if (kokonaispisteet > 19) {
      main_score_message =
        "Ruokavaliossasi on hyviä asioita, mutta myös parantamisen varaa.";
    } else {
      main_score_message =
        "Ruokavaliossasi on kohentamisen varaa. Mitä muutosta kokeilisit?";
    }
    return (
      <div id="results-div">
        <h3>{main_score_message}</h3>
        {
          /* <div>
          Pisteet Ruokarytmistä {this.props.all.dietary_pattern_score} / 10
        </div>
        <div>Pisteet Viljasta {this.props.all.grains_score} / 20</div>
        <div>
          Pisteet Hedelmistä ja Vihanneksista{" "}
          {this.props.all.fruit_and_vegetables_score} / 20
        </div>
        <div>Pisteet Rasvoista {this.props.all.fats_score} / 15</div>
        <div>
          Pisteet Kalasta ja Lihasta {this.props.all.meat_fish_score} / 10
        </div>
        <div>Pisteet Maidosta {this.props.all.dairy_score} /10</div>
        <div>Pisteet Sattumista {this.props.all.sugar_drink_score} / 15</div>
        */
          <div>Kokonaispisteet {kokonaispisteet} / 100</div>
        }
        <Canvas all={this.props.all} />
        <br />
        <br />
        <div style={flexcontainer}>
          <div style={{ order: "0" }}></div>
          <div style={{ order: "1" }}></div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Results;
