import React from "react";
class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-two-thirds">
          <figure className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
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
    );
  }
}
export default SingleMovie;
