function Religion({ handleChange, handlePrevious, handleNext, currentStep }) {
    return (
        <div class='login-wrapper'>
            <div class='question-box'>
                <p class='question' align='center' for="religion">Religion:</p>
                <select class='un' onChange={handleChange} name="religion" id="religion">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="christianity">Christianity</option>
                    <option value="jewish">Jewish</option>
                    <option value="buddhism">Buddhism</option>
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
}

export default Religion;