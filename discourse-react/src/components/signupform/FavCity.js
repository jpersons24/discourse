function FavCity({handleChange}) {
   return(
      <div>
            <label for="fav_city">Favorite City:</label>
                <select  name="fav_city" id="fav_city"  onChange={handleChange}>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="new york">New York</option>
                    <option value="los_angeles">Los Angeles</option>
                    <option value="washington_dc">Washington DC</option>
                </select>
      </div>
   )
}

export default FavCity;