import { useState } from "react";
import "./Navigation.css";

function Navigation(props) {
  const [searchMovie, setSearchMovie] = useState("");

  const theaterClickHandler = (e) => {
    e.preventDefault();
    props.sendButtonName("movies_in_theater");
    props.sendMovieName("");
  };

  const comingSoonClickHandler = (e) => {
    e.preventDefault();
    props.sendButtonName("coming_soon");
    props.sendMovieName("");
  };
  const ratedIndianClickHandler = (e) => {
    e.preventDefault();
    props.sendButtonName("top_rated_indian");
    props.sendMovieName("");
  };
  const ratedMoviesClickHandler = (e) => {
    e.preventDefault();
    props.sendButtonName("top_rated");
    props.sendMovieName("");
  };

  const favClickHandler = (e) => {
    e.preventDefault();
    props.sendButtonName("fav_movie");
    props.sendMovieName("");
  };

  const textChangeHandler = (e) => {
    setSearchMovie(e.target.value);
  };
  const searchClickHandler = () => {
    if (searchMovie === "") alert("search is empty");
    else {
      props.sendMovieName(searchMovie);
      props.searchClicked("yes");
      document.getElementById("search_text").value = "";
      props.searchClicked("no");
    }
  };
  return (
    <nav>
      <button className="nav_buttons" onClick={theaterClickHandler}>
        Movies In Theaters
      </button>
      <button className="nav_buttons" onClick={comingSoonClickHandler}>
        Coming Soon
      </button>
      <button className="nav_buttons" onClick={ratedIndianClickHandler}>
        Top Rated Indian Movies
      </button>
      <button className="nav_buttons" onClick={ratedMoviesClickHandler}>
        Top Rated Movies
      </button>
      <button className="nav_buttons" onClick={favClickHandler}>
        Favourites
      </button>
      <input
        className="search_box"
        type="text"
        placeholder="search for a movie"
        id="search_text"
        onChange={textChangeHandler}
      ></input>
      <button id="search_button" onClick={searchClickHandler}>
        🔍
      </button>
    </nav>
  );
}
export default Navigation;
