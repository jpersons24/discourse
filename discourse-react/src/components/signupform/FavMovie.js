function FavMovie({ handleChange, handlePrevious, handleNext, currentStep }) {
   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="fav_movie_genre">Favorite Movie Genre:</p>
            <select class='un' onChange={handleChange} name="fav_movie_genre" id="favorite_cuisine">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="action">Action</option>
               <option value="comedy">Comedy</option>
               <option value="drama">Drama</option>
               <option value="horror">Horror</option>
               <option value="documentary">Documentary</option>
               <option value="other">Other</option>
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




      </div >
   )
};

export default FavMovie;