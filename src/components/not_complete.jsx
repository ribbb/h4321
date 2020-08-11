import React, { Component } from "react";

class NotComplete extends Component {
  state = {};
  check_answers(answers, name, expected_length) {
    if (answers.includes(undefined)) {
      return name;
    }
    if (answers.length !== expected_length) {
      return name;
    }
    return false;
  }
  render() {
    let content = [];
    content.push(
      this.check_answers(
        this.props.all.final_scores.slice(0, 12),
        "Ruokarytmi",
        12
      )
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(12, 19), "Viljat", 7)
    );
    content.push(
      this.check_answers(
        this.props.all.final_scores.slice(19, 21),
        "Hedelmät",
        2
      )
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(21, 26), "Rasvat", 5)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(26, 35), "Kala", 9)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(35, 44), "Maito", 9)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(44), "Sattumat", 13)
    );
    let missin_fields = [];
    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      if (element) {
        missin_fields.push(element);
        missin_fields.push(", ");
      }
    }
    return (
      <div>
        <h3>Täytä {missin_fields} sivut, jotta tulos voidaan laskea.</h3>
      </div>
    );
  }
}

export default NotComplete;
