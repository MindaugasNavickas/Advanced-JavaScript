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

    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
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
              <a className="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
              </a>

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

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">More</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Jobs</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <div className="field">
                      <div className="control">
                        <input
                          ref={input => (this.search = input)}
                          onChange={this.handleInputChange}
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
          <Route exact path="/" component={TrendingMovies} />
          <Route path="/popularMovies" component={PopularMovies} />
          <Route path="/randomMovie" component={RandomMovie} />
          <TrendingMovies mainState={this.state.query} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
