function FavSport({ handleChange, currentStep, handlePrevious, handleNext }) {
   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center' for="fav_sport">Favorite Sport:</p>
            <select class='un' onChange={handleChange} name="fav_sport" id="fav_sport">
               <option value="" selected disabled hidden>Choose here</option>
               <option value="baseball">Baseball</option>
               <option value="basketball">Basketball</option>
               <option value="football">Football</option>
               <option value="golf">Golf</option>
               <option value="hockey">Hockey</option>
               <option value="lacrosse">Lacrosse</option>
               <option value="soccer">Soccer</option>
               <option value="softball">Softball</option>
               <option value="tennis">Tennis</option>
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

export default FavSport;