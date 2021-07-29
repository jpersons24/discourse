function Age({ formData, handleChange, handlePrevious, handleNext, currentStep }){
    
    return(
        <div class="login-wrapper">
            <div class="question-box">
            <p class="question" align="center"> How old are you? </p>
            <input 
                class="question-input"
                type="number" 
                name="age" 
                value={formData.age}
                onChange={handleChange}
            />  
                
            {currentStep < 13 && currentStep > 0 ?  
            <button class="chat next" onClick={handleNext}>Next</button> : null}
            </div>        
        </div>
    )
};

export default Age;