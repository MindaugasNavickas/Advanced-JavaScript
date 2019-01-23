import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Movie from "./Movie";
// import UserCard from "./userCard.js";
// import data from "./data";

// console.log(data.results[0]);

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { PopularMovies: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=27135d0f88a16655833c6950832b9adf&language=en-US&page=1"
      )
      .then(response => {
        console.log(response);

        this.setState({ PopularMovies: response.data.results });
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const movieList = this.state.PopularMovies.map(m => (
      <Movie
        key={m.id}
        poster_path={m.poster_path}
        title={m.title}
        vote_average={m.vote_average}
        overview={m.overview}
      />
    ));

    return <div className="columns is-multiline">{movieList}</div>;
  }
}
export default PopularMovies;
