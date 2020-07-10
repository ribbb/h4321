import React, { Component } from "react";
import Canvas from "./canvas";

class Results extends Component {
  state = {};
  render() {
    /*
      domains: [
      "Meal frequency",
      "Grains",
      "Fruit and vegetables",
      "Fats",
      "Fish and meat",
      "Dairy",
      "Sugar, sweets, fast food, beverages",
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
        <h1>THIS IS WHERE THE RESULTS ARE</h1>
        <div>
          Score from Meal frequency {this.props.all.dietary_pattern_score} / 10
        </div>
        <div>Score from Grains {this.props.all.grains_score} / 20</div>
        <div>
          Score from Vegetables {this.props.all.fruit_and_vegetables_score} / 20
        </div>
        <div>Score from Fats {this.props.all.fats_score} / 10</div>
        <div>
          Score from Meat and fish {this.props.all.meat_fish_score} / 10
        </div>
        <div>Score from Dairy {this.props.all.dairy_score} /10</div>
        <div>
          Score from Sugar and Drinks {this.props.all.sugar_drink_score} / 15
        </div>
        <Canvas all={this.props.all} />
      </div>
    );
  }
}

export default Results;
