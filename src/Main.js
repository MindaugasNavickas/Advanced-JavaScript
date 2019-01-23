import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TrendingMovies from "./TrendingMovies";
import PopularMovies from "./PopularMovies";
class Main extends React.Component {
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
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={TrendingMovies} />
          <Route path="/popularMovies" component={PopularMovies} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
