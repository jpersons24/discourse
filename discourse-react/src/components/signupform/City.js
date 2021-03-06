function City({ handleChange, handlePrevious, handleNext, currentStep }) {
   return(
      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="city">What city are you in?</p>
               <select class='question-input' onChange={handleChange} name="city" id="city">
                  <option value="" selected disabled hidden>Choose here</option>
                  <option value="new york">New York</option>
                  <option value="los angeles">Los Angeles</option>
                  <option value="washington dc">Washington DC</option>
                  <option value="chicago">Chicago</option>
                  <option value="dallas">Dallas</option>
                  <option value="miami">Miami</option>
               </select>
               <div class="pre-next-buttons">
                    {currentStep > 1 ? 
                        <>
                        <button class="chat previous" onClick={handlePrevious}>Previous</button>
                        <button class="chat next" onClick={handleNext}>Next</button>
                        </>     
                        : 
                        null
                    }
                </div>
         </div>

      </div>
   )
};

export default City;