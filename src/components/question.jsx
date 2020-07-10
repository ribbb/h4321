import React, { Component } from "react";
class Question extends Component {
  render() {
    //IDS 8 9 10 11 12 are dublicate questions
    const removed_question_ids = [35, 40, 44, 8, 9, 10, 11, 12];
    if (removed_question_ids.includes(this.props.q.id)) {
      return "";
    }
    return (
      <div id="questions">
        {this.props.q.question_description}
        <div id="questionAnswers">
          {this.props.q.choices.length > 1
            ? this.props.q.choices.map((choice) => this.MultipleChoice(choice))
            : this.UserInput(this.props.q.id)}
        </div>
      </div>
    );
  }

  UserInput(id) {
    let value = "";
    if (this.props.final_scores[id - 1]) {
      value = this.props.final_scores[id - 1];
    }
    return (
      <input
        id={id}
        className="input-group mb-2"
        type="number"
        value={value}
        onChange={this.props.userInput}
      ></input>
    );
  }
  MultipleChoice(choice) {
    //{
    //  id: 1,
    //  question_description:
    //    "1. Kuinka monena arki- tai työpäivänä viikossa syöt aamupalan",
    //  choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
    //  scores: [0, 0.3, 0.7, 1],
    //  button_selected: [],
    //},
    //console.log(this.props.q.c);
    const idxFinder = (element) => element === choice;

    let class_text = "btn btn-";
    if (
      this.props.q.button_selected === this.props.q.choices.findIndex(idxFinder)
    ) {
      class_text += "success";
    } else {
      class_text += "primary";
    }
    //console.log(this.props.q.button_selected);
    return (
      <div id="individualAnswer">
        <button
          onClick={() => this.props.multipleChoice([choice, this.props.q.id])}
          className={class_text}
        >
          {choice}
        </button>
      </div>
    );
  }
}

export default Question;
