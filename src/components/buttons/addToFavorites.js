import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavouriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  
  const handleAddToFavourite = e => {
    e.preventDefault();
    context.addToFavourites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavourite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavouriteButton;