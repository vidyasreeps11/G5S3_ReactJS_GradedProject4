import "./MovieDetails.css";

function MovieDetails(props) {
  //console.log("from moviedetails.js :", props.sendMovieData);
  let image = props.sendMovieData.posterurl;
  let title = props.sendMovieData.title;
  let releaseDate = props.sendMovieData.releaseDate;
  let actors = props.sendMovieData.actors.join(" , ");
  let storyLine = props.sendMovieData.storyline;
  let genres = props.sendMovieData.genres.join(" , ");
  return (
    <div className="movie_details">
      <div className="poster">
        <img src={image} alt=""></img>
      </div>
      <div className="data">
        <label className="sub_heading">Title : </label>
        <label className="details">{title}</label>
        <br></br>
        <label className="sub_heading">Release Date : </label>
        <label className="details"> {releaseDate} </label>
        <br></br>
        <label className="sub_heading">Actors: </label>
        <label className="details">{actors}</label>
        <br></br>
        <label className="sub_heading">Genres: </label>
        <label className="details">{genres}</label>
        <br></br>
        <label className="sub_heading">Story Line</label>
        <br></br>
        <label className="details">{storyLine}</label>
      </div>
    </div>
  );
}

export default MovieDetails;
