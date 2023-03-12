import "./Cards.css";
import MovieCards from "./MovieCards";

function Cards(props) {
  let posterAndTitle = props.movieData;

  const isItemRemoved = (value) => {
    props.itemRemoved(value);
  };

  const getClickedMovieData = (data) => {
    //console.log("from cards.js : ", data);
    props.sendClickedMovieData(data);
  };
  return (
    <div className="cards">
      {posterAndTitle.map((item, index) => (
        <MovieCards
          key={index}
          title={item.title}
          image={item.posterurl}
          alt_img={item.poster}
          listName={props.listName}
          itemRemoved={isItemRemoved}
          sendClickedMovieData={getClickedMovieData}
        ></MovieCards>
      ))}
    </div>
  );
}

export default Cards;
