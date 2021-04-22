function City({ handleChange }) {
   return(
      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="city">What city are you in?</p>
               <select class='un' onChange={handleChange} name="city" id="city">
                  <option value="" selected disabled hidden>Choose here</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Kansas City">Kansas City</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Dallas">Dallas</option>
                  <option value="Miami">Miami</option>
               </select>
               <div class="pre-next-buttons">
                    {currentStep > 1 ? 
                        <>
                        <button class="submit previous" onClick={handlePrevious}>Previous</button>
                        <button class="submit next" onClick={handleNext}>Next</button>
                            
                        </>     
                        : 
                        null
                    }
                    {/* {currentStep < 13 && currentStep > 0 ?  <button class="submit next" onClick={handleNext}>Next</button> : null} */}
                </div>
         </div>

      </div>
   )
};

export default City;