function SexualOrientation({handleChange}){
    
    return(
        <div>
            <label for="sexual_orientation">Sexual Orientation:</label>
                <select  name="sexual_orientation" id="sexual_orientation"  onChange={handleChange}>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="heterosexual">Heterosexual</option>
                    <option value="homosexual">Homosexual</option>
                    <option value="bi-sexual">Bi-sexual</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                <button onClick={setStep(step + 1)}>Next<button/> */}
        </div>
    )
};

export default SexualOrientation;