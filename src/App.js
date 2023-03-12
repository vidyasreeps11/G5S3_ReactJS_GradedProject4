import "./App.css";
import data from "./json/data.json";
import Navigation from "./Components/Navigation";
import Cards from "./Components/Cards";
import { Fragment, useState } from "react";
import ListTitle from "./Components/ListTitle";
import SearchedMovie from "./Components/SearchedMovie";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [buttonClicked, setButtonClicked] = useState("movies_in_theater");

  let moviesInTheater = data["movies-in-theaters"];
  let comingSoon = data["movies-coming"];
  let indianMovies = data["top-rated-india"];
  let ratedMovies = data["top-rated-movies"];
  let favMovies = data.favourite;
  let searchMovie = "";
  let posterAndTitle = moviesInTheater.map(({ poster, posterurl, title }) => ({
    poster,
    posterurl,
    title,
  }));

  const [movieList, setMovieList] = useState(posterAndTitle);
  const [movieFound, setMovieFound] = useState(0);
  const [searchedMovie, setSearchedMovie] = useState([]);
  //const [favEmpty, setFavEmpty] = useState(1);
  const [searchClicked, setSearchClicked] = useState("");
  const [clickedMovieData, setClickedMovieData] = useState({});

  const updatePosterAndTitle = (value) => {
    setClickedMovieData({});
    if (value === "movies_in_theater") {
      posterAndTitle = moviesInTheater.map(({ poster, posterurl, title }) => ({
        poster,
        posterurl,
        title,
      }));
    } else if (value === "coming_soon") {
      posterAndTitle = comingSoon.map(({ poster, posterurl, title }) => ({
        poster,
        posterurl,
        title,
      }));
    } else if (value === "top_rated_indian") {
      posterAndTitle = indianMovies.map(({ poster, posterurl, title }) => ({
        poster,
        posterurl,
        title,
      }));
    } else if (value === "top_rated") {
      posterAndTitle = ratedMovies.map(({ poster, posterurl, title }) => ({
        poster,
        posterurl,
        title,
      }));
    } else if (value === "fav_movie") {
      posterAndTitle = favMovies.map(({ poster, posterurl, title }) => ({
        poster,
        posterurl,
        title,
      }));
    }

    setMovieList(posterAndTitle);
    setButtonClicked(value);
  };

  //checks which button in navigation component is clicked
  const getButtonName = (value) => {
    updatePosterAndTitle(value);
  };

  let found = 0;
  // let index = 0;
  let searchedMovieDetails;

  //updating fav list when an item is removed
  const isItemRemoved = (value) => {
    if (value === "yes") updatePosterAndTitle("fav_movie");
  };

  const ifSearchClicked = (value) => {
    if (value === "yes") setSearchClicked("yes");
    else setSearchClicked("");
  };

  //fetching movie data when clicked on movie card
  const getClickedMovieData = (data) => {
    if (Object.keys(data).length !== 0) {
      setClickedMovieData(data);
    }

    //console.log(Object.keys(clickedMovieData).length);
  };
  //find details of movie searched
  const getSearchMovieName = (value) => {
    searchMovie = value;

    for (let i = 0; i < moviesInTheater.length; i++) {
      if (
        moviesInTheater[i].title.toLocaleLowerCase() ===
        searchMovie.toLocaleLowerCase()
      ) {
        found = 1;
        //index = i;
        searchedMovieDetails = moviesInTheater[i];
        break;
      }
    }

    if (found !== 1) {
      for (let i = 0; i < comingSoon.length; i++) {
        if (
          comingSoon[i].title.toLocaleLowerCase() ===
          searchMovie.toLocaleLowerCase()
        ) {
          found = 1;
          //  index = i;
          searchedMovieDetails = comingSoon[i];
          break;
        }
      }
    }
    if (found !== 1) {
      for (let i = 0; i < indianMovies.length; i++) {
        if (
          indianMovies[i].title.toLocaleLowerCase() ===
          searchMovie.toLocaleLowerCase()
        ) {
          found = 1;
          //index = i;
          searchedMovieDetails = indianMovies[i];
          break;
        }
      }
    }
    if (found !== 1) {
      for (let i = 0; i < ratedMovies.length; i++) {
        if (
          ratedMovies[i].title.toLocaleLowerCase() ===
          searchMovie.toLocaleLowerCase()
        ) {
          found = 1;
          // index = i;
          searchedMovieDetails = ratedMovies[i];
          break;
        }
      }
    }

    if (found === 1) {
      //console.log("found index: ", index);
      // console.log(searchedMovieDetails);
      setMovieFound(found);
      setSearchedMovie(searchedMovieDetails);
    } else {
      if (searchClicked === "yes") alert("No Movie Found");
      //console.log("from app.js :not found");
      setMovieFound(found);
    }
  };

  return (
    <Fragment>
      <Navigation
        sendButtonName={getButtonName}
        sendMovieName={getSearchMovieName}
        searchClicked={ifSearchClicked}
      />
      <br></br>
      {movieFound === 0 && <ListTitle title={buttonClicked} />}

      {Object.keys(clickedMovieData).length !== 0 && (
        <MovieDetails sendMovieData={clickedMovieData}></MovieDetails>
      )}
      {movieFound === 0 && (
        <Cards
          movieData={movieList}
          listName={buttonClicked}
          itemRemoved={isItemRemoved}
          sendClickedMovieData={getClickedMovieData}
        ></Cards>
      )}
      {movieFound === 1 && <SearchedMovie movie={searchedMovie} />}
    </Fragment>
  );
}

export default App;
