function City({ handleChange }) {
   return(
      <div>
         <label for="city">What city are you in?</label>
            <select onChange={handleChange} name="city" id="city">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="New York">New York</option>
               <option value="Los Angeles">Los Angeles</option>
               <option value="Kansas City">Kansas City</option>
               <option value="Chicago">Chicago</option>
               <option value="Dallas">Dallas</option>
               <option value="Miami">Miami</option>
            </select>
      </div>
   )
};

export default City;