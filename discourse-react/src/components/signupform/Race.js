function Race({handleChange}){
    
    return(
        <div>
              <label for="race">Ethnicity/Race</label>
                <select  name="race"  onChange={handleChange}>
                 
                 <option value="" selected disabled hidden>Choose here</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="middle eastern">Middle Eastern</option>
                    <option value= "asian">Asian</option>
                    <option value= "hispanic">Hispanic</option>
                    <option value= "other">Other</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                <button onClick={setStep(step + 1)}>Next<button/> */}
        </div>
    )
};

export default Race