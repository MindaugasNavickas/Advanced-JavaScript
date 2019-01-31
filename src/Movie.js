import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullText: false,
      buttonText: true,
      condition: false
    };
    // console.log(this.state.buttonText);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleClick = () => {
    this.setState(state => ({
      showFullText: !state.showFullText,
      buttonText: !this.buttonText,
      condition: !this.state.condition
    }));
    // console.log(this.state.buttonText);
  };
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    console.log("Movie query " + this.state.query);
  };

  render() {
    if (this.props.overview.length > 200 && this.state.showFullText === false) {
      return (
        <div className="column is-3 card">
          <div
            className={
              this.state.condition
                ? "is-parent cardHeightLarge"
                : "is-parent cardHeightSmall"
            }
          >
            <div>
              <figure className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    this.props.poster_path
                  }`}
                  alt="Movie Poster"
                />
              </figure>

              <h4 className="title is-4">{this.props.title}</h4>
              <p className="subtitle is-6">
                Average Rating {this.props.vote_average}
              </p>
              <p className="subtitle is-6">
                {this.props.overview.slice(0, 200) + "..."}
              </p>
            </div>
            <a
              className="button is-primary level-left buttonPosition is-child"
              onClick={this.handleClick}
            >
              {this.state.buttonText ? "Read More" : "Read Less"}
            </a>
          </div>
        </div>
      );
    } else if (
      this.props.overview.length > 200 &&
      this.state.showFullText === true
    ) {
      return (
        <div className="column is-3 card">
          <div
            className={
              this.state.condition
                ? "is-parent cardHeightLarge"
                : "is-parent cardHeightSmall"
            }
          >
            <div>
              <figure className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    this.props.poster_path
                  }`}
                  alt="Movie Poster"
                />
              </figure>

              <h4 className="title is-4">{this.props.title}</h4>
              <p className="subtitle is-6">
                Average Rating {this.props.vote_average}
              </p>
            </div>
            <p className="subtitle is-6">{this.props.overview}</p>
            <a
              className="button is-primary level-left is-child"
              onClick={this.handleClick}
            >
              {this.state.buttonText ? "Read Less" : "Read More"}
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="column is-3 card">
          <div
            className={
              this.state.condition
                ? "is-parent cardHeightLarge"
                : "is-parent cardHeightSmall"
            }
          >
            <div>
              <figure className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    this.props.poster_path
                  }`}
                  alt="Movie Poster"
                />
              </figure>

              <h4 className="title is-4">{this.props.title}</h4>
              <p className="subtitle is-6">
                Average Rating {this.props.vote_average}
              </p>
              <p className="subtitle is-6">{this.props.overview}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Movie;
