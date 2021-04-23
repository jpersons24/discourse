function FavCuisine({ handleChange, handlePrevious, handleNext, currentStep }) {
   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="fav_cuisine">Favorite Cuisine:</p>
            <select class='un' onChange={handleChange} name="fav_cuisine" id="fav_cuisine">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="chinese">Chinese</option>
               <option value="french">French</option>
               <option value="indian">Indian</option>
               <option value="italian">Italian</option>
               <option value="japanese">Japanese</option>
               <option value="mediterranean">Mediterranean</option>
               <option value="mexican">Mexican</option>
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

export default FavCuisine;