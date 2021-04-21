function FavCuisine({handleChange}) {
   return (
      <div>
          <label for="fav_cuisine">Favorite Cuisine:</label>
                <select onChange={handleChange} name="fav_cuisine" id="fav_cuisine">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="mexican">Mexican</option>
                    <option value="asian">Asian</option>
                    <option value="italian">Italian</option>
                </select>
      </div>
   )
};

export default FavCuisine;