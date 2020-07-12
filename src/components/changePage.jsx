import React, { Component } from "react";

class ChangePage extends Component {
  state = {};
  render() {
    let next_page_name = this.props.domains[this.props.pageNumber + 1];
    let previous_page_number = this.props.domains[this.props.pageNumber - 1];
    if (next_page_name === undefined) {
      next_page_name = this.props.domains[0];
    }
    if (previous_page_number === undefined) {
      previous_page_number = this.props.domains[this.props.domains.length - 1];
    }
    return (
      //domains pageNumber

      <div id="changePageButton">
        <div id="previousButton">
          <button
            id="previous"
            className="btn btn-info"
            onClick={this.props.changeQuestions}
          >
            Edellinen sivu {previous_page_number}.
          </button>
        </div>
        <div id="nextButton">
          <button
            id="next"
            className="btn btn-success"
            onClick={this.props.changeQuestions}
          >
            Seuraava sivu {next_page_name}.
          </button>
        </div>
      </div>
    );
  }
}

export default ChangePage;
