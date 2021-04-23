function PoliticalParty({ handleChange, handlePrevious, handleNext, currentStep }) {
   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="political_party">Political Affiliation:</p>
            <select class='un' onChange={handleChange} name="political_party" id="political_party">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="democratic">Democratic</option>
               <option value="independent">Independent</option>
               <option value="republican">Republican</option>
               <option value="other">Other</option>
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
               </div>
         </div>



      </div>
   )
};

export default PoliticalParty;