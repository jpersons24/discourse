function Race(){
    
    return(
        <div>
              <label for="race">Ethnicity/Race</label>
                <select  name="ethnicity-race" id="ethnicity-race">
                    <option value="heterosexual">Heterosexual</option>
                    <option value="homosexual">Homosexual</option>
                    <option value="Bi-sexual">Bi-sexual</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                <button onClick={setStep(step + 1)}>Next<button/> */}
        </div>
    )
};

export default Race