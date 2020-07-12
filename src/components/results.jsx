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
    return (
      <div id="results-div">
        <div>
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
        <div>
          Kokonaispisteet{" "}
          {this.props.all.dietary_pattern_score +
            this.props.all.grains_score +
            this.props.all.fruit_and_vegetables_score +
            this.props.all.fats_score +
            this.props.all.meat_fish_score +
            this.props.all.dairy_score +
            this.props.all.sugar_drink_score}{" "}
          / 100
        </div>
        <Canvas all={this.props.all} />
      </div>
    );
  }
}

export default Results;
