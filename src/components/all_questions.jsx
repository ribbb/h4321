import React, { Component } from "react";
import Question from "./question";
import ScoreCalculator from "./calculate_scores";
class AllQuestions extends Component {
  render() {
    const selected_questions = this.props.all.questions.slice(
      this.props.all.question_indexes[this.props.all.question_page_number],
      this.props.all.question_indexes[this.props.all.question_page_number + 1]
    );
    return (
      <div>
        <ScoreCalculator
          score_name="Hello"
          question_page_number={this.props.all.question_page_number}
          final_scores={this.props.all.final_scores}
          score_function_list={this.props.score_function_list}
          user_input_helper={this.props.user_input_score_helper}
          changeQuestions={this.props.changeQuestions}
          domains={this.props.all.domains}
        />

        {selected_questions.map((q) => (
          <Question
            q={q}
            key={q.id}
            multipleChoice={this.props.set_score}
            userInput={this.props.evalUserInput}
            final_scores={this.props.all.final_scores}
            update_state={this.props.update_state}
          />
        ))}
      </div>
    );
  }
}

export default AllQuestions;
