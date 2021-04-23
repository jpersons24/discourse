function FavMovie({ handleChange, handlePrevious, handleNext, currentStep }) {
   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="fav_movie_genre">Favorite Movie Genre:</p>
            <select class='un' onChange={handleChange} name="fav_movie_genre" id="favorite_cuisine">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="Horror">Horror</option>
               <option value="Comedy">Comedy</option>
               <option value="Drama">Drama</option>
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




      </div >
   )
};

export default FavMovie;