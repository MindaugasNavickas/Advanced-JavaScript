import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SingleMovie from "./SingleMovie";
// import UserCard from "./userCard.js";
// import data from "./data";

// console.log(data.results[0]);

class RandomMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { RandomMovie: [] };
    console.log(this.state.RandomMovie);
  }

  componentDidMount() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            Math.floor(Math.random() * Math.floor(99999))
          }?api_key=27135d0f88a16655833c6950832b9adf&language=en-US`
        )
        .then(response => {
          console.log(response.data);

          this.setState({ RandomMovie: response.data });
          // console.log(response.data);
          // console.log(response.data.results[0].overview);

        })
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    const singleMovie = this.state.RandomMovie.map(m => (
      <SingleMovie
        key={m.id}
        poster_path={m.poster_path}
        title={m.title}
        vote_average={m.vote_average}
        overview={m.overview}
        id={m.id}
      />
    ));

    return <div className="columns">{singleMovie}</div>;
  }
}
export default RandomMovie;
