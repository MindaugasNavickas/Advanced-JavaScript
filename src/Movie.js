import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="column is-3">
        <div className="card" style={{ height: "740px" }}>
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
          <p className="subtitle is-6">{this.props.overview.length > 200 ? this.props.overview.slice(0,200) : this.props.overview}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
