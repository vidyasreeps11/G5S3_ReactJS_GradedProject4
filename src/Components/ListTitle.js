import "./ListTitle.css";
function ListTitle(props) {
  let buttonValue = props.title;
  let title = "";
  if (buttonValue === "movies_in_theater") title = "Movies In Theater";
  else if (buttonValue === "coming_soon") title = "Coming Soon";
  else if (buttonValue === "top_rated_indian")
    title = "Top Rated Indian Movies";
  else if (buttonValue === "top_rated") title = "Top Rated Movies";
  else if (buttonValue === "fav_movie") title = "Favourite Movies";
  return <div className="list_title">{title}</div>;
}

export default ListTitle;
