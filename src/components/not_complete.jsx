import React, { Component } from "react";

class NotComplete extends Component {
  state = {};
  check_answers(answers, name, expected_length) {
    console.log(answers);
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
        "Meal frequency",
        12
      )
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(12, 19), "Grains", 7)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(19, 21), "Fruits", 2)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(21, 26), "Fats", 5)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(26, 35), "Fish", 9)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(35, 44), "Dairy", 9)
    );
    content.push(
      this.check_answers(this.props.all.final_scores.slice(44), "Sugar", 13)
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
        <h3>Please fill {missin_fields} pages to see results.</h3>
      </div>
    );
  }
}

export default NotComplete;
