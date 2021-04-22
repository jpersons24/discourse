function Gender({handleChange, formData, currentStep, handleNext, handlePrevious}){
    
    return(
        <div class="login-wrapper">
            <div class="question-box">

            <p class="question" align="center" for="gender">What is your gender?</p>
                <select class="un" name="gender" id="gender"  onChange={handleChange}>
                <option value="" selected disabled hidden>Choose here</option>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="trans">Trans</option>
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

export default Gender;

