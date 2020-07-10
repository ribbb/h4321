import React, { Component } from "react";
import AllQuestions from "./all_questions";
import Results from "./results";
import NotComplete from "./not_complete";
class Questions_or_results extends Component {
  state = {};
  render() {
    let content = (
      <AllQuestions
        all={this.props.all}
        user_input_score_helper={this.props.user_input_score_helper}
        changeQuestions={this.props.changeQuestions}
        set_score={this.props.set_score}
        evalUserInput={this.props.evalUserInput}
        score_function_list={this.props.score_function_list}
        update_state={this.props.update_state}
      />
    );
    if (this.props.all.question_page_number === 7) {
      if (
        this.props.all.final_scores.length === 57 &&
        !this.props.all.final_scores.includes(undefined)
      ) {
        content = <Results all={this.props.all} />;
      } else {
        content = <NotComplete all={this.props.all} />;
      }
    }
    return <main role="main">{content}</main>;
  }
}

export default Questions_or_results;
