function Race({handleChange, handlePrevious, handleNext, currentStep}){
    
    return(
        <div class="login-wrapper">
            <div class="question-box">

              {/* <label for="race">Ethnicity/Race</label> */}
              <p class="question" align="center" for="race">What is your race?</p>
                <select class="un" name="race"  onChange={handleChange}>
                 
                 <option value="" selected disabled hidden>Choose here</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="middle eastern">Middle Eastern</option>
                    <option value= "asian">Asian</option>
                    <option value= "hispanic">Hispanic</option>
                    <option value= "other">Other</option>
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

export default Race