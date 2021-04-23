function Religion({ handleChange, handlePrevious, handleNext, currentStep }) {
    return (
        <div class='login-wrapper'>
            <div class='question-box'>
                <p class='question' align='center' for="religion">Religion:</p>
                <select class='un' onChange={handleChange} name="religion" id="religion">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="christian">Christian</option>
                    <option value="hindu">Hindu</option>
                    <option value="jewish">Jewish</option>
                    <option value="muslim">Muslim</option>
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
}

export default Religion;