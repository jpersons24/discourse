function SexualOrientation({ handleChange, handlePrevious, handleNext, currentStep }) {

    return (
        <div class='login-wrapper'>

            <div class='question-box'>
                <p class='question' align='center' for="sexual_orientation">Sexual Orientation:</p>
                <select class='un' name="sexual_orientation" id="sexual_orientation" onChange={handleChange}>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="heterosexual">Heterosexual</option>
                    <option value="homosexual">Homosexual</option>
                    <option value="bi-sexual">Bi-sexual</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                    <button onClick={setStep(step + 1)}>Next<button/> */}
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

export default SexualOrientation;