import "./MovieCards.css";
import data from "../json/data.json";

function MovieCards(props) {
  let image = props.image;
  let title = props.title;
  // props.itemRemoved("no");
  // let poster = `../images/${props.alt_img}`;
  let list = props.listName;
  let subArray = [];

  //checking which movie list the fav movie belongs to
  if (list === "movies_in_theater") subArray = data["movies-in-theaters"];
  else if (list === "coming_soon") subArray = data["movies-coming"];
  else if (list === "top_rated_indian") subArray = data["top-rated-india"];
  else if (list === "top_rated") subArray = data["top-rated-movies"];

  //adding movie to favourite list
  const favClickHandler = () => {
    let index = 0;
    let found = "no";

    //checking if movie already exist in favourite list
    for (let i = 0; i < data.favourite.length; i++) {
      if (data.favourite[i].title === title) {
        found = "yes";
        break;
      }
    }
    if (found === "yes") {
      alert("Item already added to favourite list");
    } else {
      //adding movie to favourite list if it does not exist already
      for (let i = 0; i < subArray.length; i++) {
        if (subArray[i].title === title) {
          index = i;
          break;
        }
      }

      let newFavMovie = subArray[index];

      data.favourite.push(newFavMovie);
      alert("added to favourites");
    }
  };

  //removing movie from favourite list
  const deleteFavHandler = () => {
    let index = 0;
    for (let i = 0; i < data.favourite.length; i++) {
      if (data.favourite[i].title === title) {
        index = i;
        break;
      }
    }
    //let removeMovie = data.favourite[index];

    data.favourite.splice(index, 1);
    props.itemRemoved("yes");
  };

  //executes when a movie card is clicked
  const movieClickHandler = () => {
    let index = 0;
    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].title === title) {
        index = i;
        break;
      }
    }
    props.sendClickedMovieData(subArray[index]);
    //console.log("from moviecards.js :", subArray[index]);
  };
  return (
    <div className="movie_card">
      <img src={image} alt="" onClick={movieClickHandler}></img>
      <div className="title_div" onClick={movieClickHandler}>
        {title}
      </div>
      <div className="fav_div">
        {list !== "fav_movie" && (
          <button id="fav_button" onClick={favClickHandler}>
            Add to Favourites 💓{" "}
          </button>
        )}
        {list === "fav_movie" && (
          <button id="fav_button" onClick={deleteFavHandler}>
            Remove ❌
          </button>
        )}
      </div>
    </div>
  );
}
export default MovieCards;
