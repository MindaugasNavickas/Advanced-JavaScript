import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import UserCard from "./userCard.js";
// import data from "./data";

// console.log(data.results[0]);

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Movies: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=27135d0f88a16655833c6950832b9adf"
      )
      .then(response => {
        console.log(response.data.results);

        this.setState({ Movies: response.data.results });
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const movieList = this.state.Movies.map(m => (
      <Movie
        key={m.id}
        poster_path={m.poster_path}
        title={m.title}
        vote_average={m.vote_average}
        overview={m.overview}
      />
    ));

    return <div className="container">{movieList}</div>;
  }
}

class Movie extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-5">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
                  alt="Movie Poster"
                />
              </figure>
            </div>
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

ReactDOM.render(<Movies />, document.getElementById("root"));
