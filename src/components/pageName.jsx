import React, { Component } from "react";

class PageName extends Component {
  state = {};
  render() {
    return (
      <div id="pageName">
        <h1>{this.props.domains[this.props.pageNumber]}</h1>
      </div>
    );
  }
}

export default PageName;
