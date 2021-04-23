function FavBook({ handleChange, handlePrevious, handleNext, currentStep }) {
   return (
      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="fav_book_genre">Favorite Book Genre:</p>
            <select class='un' onChange={handleChange} name="fav_book_genre" id="fav_book_genre">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="non-fiction">Non-fiction</option>
               <option value="thriller">Thriller</option>
               <option value="romance">Romance</option>
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

export default FavBook;