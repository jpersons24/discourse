function FavMovie({handleChange}) {
   return (
      <div>
         <label for="fav_movie_genre">Favorite Movie Genre:</label>
         <select onChange={handleChange} name="fav_movie_genre" id="favorite_cuisine">
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
         </select>
      </div>
   )
};

export default FavMovie;