import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Movie from "./Movie";
// import UserCard from "./userCard.js";
// import data from "./data";

// console.log(data.results[0]);

class TrendingMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { TrendingMovies: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=27135d0f88a16655833c6950832b9adf"
      )
      .then(response => {
        console.log(response.data.results);

        this.setState({ TrendingMovies: response.data.results });
        // console.log(response.data);
        // console.log(response.data.results[0].overview);

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const movieList = this.state.TrendingMovies.map(m => (
      <Movie
        key={m.id}
        poster_path={m.poster_path}
        title={m.title}
        vote_average={m.vote_average}
        overview={m.overview}
        id={m.id}
      />
    ));

    return <div className="columns is-multiline">{movieList}</div>;
  }
}
export default TrendingMovies;
