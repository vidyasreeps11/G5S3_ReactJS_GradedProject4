import MovieCards from "./MovieCards";
function SearchedMovie(props) {
  //console.log("from searchedmovie : ", props.movie);

  return (
    <MovieCards
      title={props.movie.title}
      image={props.movie.posterurl}
      alt_img={props.movie.poster}
    />
  );
}

export default SearchedMovie;
