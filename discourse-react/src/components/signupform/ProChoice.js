function ProChoice({ handleChange, handlePrevious, handleNext, currentStep }) {


   return (

      <div class='login-wrapper'>
         <div class='question-box'>
            <p class='question' align='center'>What is your stance on abortion?</p>
            <select class='question-input'>
               <option value="" selected disabled hidden>Choose here</option>
               <option name="pro_choice" id="pro_choice" value={true} onChange={handleChange}>Pro Choice</option>
               <option class='un' type="radio" name="pro_choice" id="pro_life" value={false} onChange={handleChange}>Pro Life</option>

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
         </div >


      </div>
   )
}

export default ProChoice;