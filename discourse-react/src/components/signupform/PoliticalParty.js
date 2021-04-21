function PoliticalParty({handleChange}) {
   return (
      <div>
         <label for="political_party">Political Affiliation:</label>
                <select onChange={handleChange} name="political_party" id="political_party">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="Democratic">Democratic</option>
                    <option value="Republican">Republican</option>
                    <option value="Moderate">Moderate</option>
                </select>
      </div>
   )
};

export default PoliticalParty;