import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SingleMovie from "./SingleMovie";

// `https://api.themoviedb.org/3/movie/${
//   Math.floor(Math.random() * Math.floor(99999))
// }?api_key=27135d0f88a16655833c6950832b9adf&language=en-US`

class RandomMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { RandMovie: [] };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${Math.floor(
          Math.random() * Math.floor(99999)
        )}?api_key=27135d0f88a16655833c6950832b9adf&language=en-US`
      )
      .then(response => {
        console.log(response.data);

        this.setState({ RandMovie: response.data });
        // console.log(response.data);
        // console.log(response.data.results[0].overview);
      })
      .catch(error => {
        console.log(error);
        this.setState({ RandMovie: null });
      });
  }

  render() {
    if(this.state.RandMovie === null || this.state.RandMovie.poster_path === null){
      window.location.reload();
    }else
    return (
      <div className="columns">
        <SingleMovie
          key={this.state.RandMovie.id}
          poster_path={this.state.RandMovie.poster_path}
          title={this.state.RandMovie.title}
          vote_average={this.state.RandMovie.vote_average}
          overview={this.state.RandMovie.overview}
          id={this.state.RandMovie.id}
        />
      </div>
    );
  }
}
export default RandomMovie;
