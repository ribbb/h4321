import React, { Component } from "react";

class ScoreCalculator extends Component {
  //props.score_name
  //props.final_scores

  //state = {  }
  get_reward(reward, name_of_score) {
    this.props.update_state(reward, name_of_score);
  }
  render() {
    /*
    const reward = this.props.score_function_list[
      this.props.question_page_number
    ](this.props.final_scores, this.props.user_input_helper);
    this.get_reward(
      reward,
      this.props.domains[this.props.question_page_number]
    );
    */
    return (
      <div>
        <h3>0</h3>
      </div>
    );
  }
}

export default ScoreCalculator;
