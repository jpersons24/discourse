function FavSport({handleChange}) {
   return (
      <div>
          <label for="fav_sport">Favorite Sport:</label>
                <select onChange={handleChange} name="fav_sport" id="fav_sport">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="Football">Football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Baseball">Baseball</option>
                </select>
      </div>  
   )
};

export default FavSport;