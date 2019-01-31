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

    this.state = {
      TrendingMovies: [],
      SearchedMovieList: [],
      query: this.props.mainState
    };
  }




  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=27135d0f88a16655833c6950832b9adf"
      )
      .then(response => {
        // console.log(response.data.results);

        this.setState({ TrendingMovies: response.data.results });
        // console.log(this.props.mainState);
        // console.log(response.data.results[0].overview);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mainState !== prevProps.mainState) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=27135d0f88a16655833c6950832b9adf&language=en-US&query=${
            this.props.mainState
          }&page=1&include_adult=false`
        )
        .then(response => {
          console.log(response);

          this.setState({ SearchedMovieList: response.data.results });
          // console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        if(this.props.mainState === ''){
          console.log("if was called");
            this.setState({ searchedMovieList: [] });
            console.log("The array is: ");
        }
    }
  }
  render() {
    console.log("Searched movie list " + this.state.SearchedMovieList);
    console.log("Trending Movies " + this.state.TrendingMovies);
    if (this.props.mainState === '') {
      console.log(this.props.mainState);
      const movieList = this.state.TrendingMovies.map(m => (
        <Movie
          key={m.id}
          poster_path={m.poster_path}
          title={m.title}
          vote_average={m.vote_average}
          overview={m.overview}
          id={m.id}
          sort={this.state.query}
        />
      ));
      return <div className="columns is-multiline">{movieList}</div>;
    } else{
      console.log(this.props.mainState);
      const searchedMovieList = this.state.SearchedMovieList.map(m => (
        <Movie
          key={m.id}
          poster_path={m.poster_path}
          title={m.title}
          vote_average={m.vote_average}
          overview={m.overview}
          id={m.id}
          sort={this.state.query}
        />
      ));

      return <div className="columns is-multiline">{searchedMovieList}</div>;
    }
  }
}
export default TrendingMovies;
