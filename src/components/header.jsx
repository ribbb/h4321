import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.link_domains = this.link_domains.bind(this);
  }
  //state = {  }
  link_domains(domain) {
    let style = {};
    if (this.props.domains.indexOf(domain) == this.props.pageNumber) {
      style = {
        textDecoration: "underline",
      };
    }
    return (
      <li className="nav-item active" onClick={this.props.changeQuestions}>
        <a className="nav-link" href="#" id="Green" style={style}>
          {domain} <span className="sr-only"></span>
        </a>
      </li>
    );
  }
  render() {
    const links = this.props.domains.map(this.link_domains);
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            Kysely
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">{links}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
