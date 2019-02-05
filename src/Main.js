import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TrendingMovies from "./TrendingMovies";
import PopularMovies from "./PopularMovies";
import RandomMovie from "./RandomMovie";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleInputChange(event){
  //   this.setState({
  //     query: event.target.value
  //   });
  //   // console.log(this.state.query);
  // }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });

    // console.log(this.state.query);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Trending
                </Link>

                <Link to="/popularMovies" className="navbar-item">
                  Popular
                </Link>

                <Link to="/randomMovie" className="navbar-item">
                  Random Movie
                </Link>
              </div>

              <div className="navbar-end">
                <a
                  href="https://github.com/MindaugasNavickas/Advanced-JavaScript"
                  className="navbar-item"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span>GitHub</span>
                </a>
                <div className="navbar-item">
                  <div className="buttons">
                    <div className="field">
                      <div className="control">
                        <input
                          value={this.state.query}
                          onChange={this.handleChange}
                          className="input inputBox"
                          type="text"
                          placeholder="Text input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Route
            exact
            path="/"
            render={props => (
              <TrendingMovies {...props} mainState={this.state.query} />
            )}
          />
          <Route
            path="/popularMovies"
            render={props => (
              <PopularMovies {...props} mainState={this.state.query} />
            )}
          />
          <Route path="/randomMovie" component={RandomMovie} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
