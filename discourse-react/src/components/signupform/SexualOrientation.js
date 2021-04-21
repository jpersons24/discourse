function SexualOrientation(){
    
    return(
        <div>
            <label for="sexual-orientation">Sexual Orientation:</label>
                <select  name="sexual-orientation" id="sexual-orientation">
                    <option value="heterosexual">Heterosexual</option>
                    <option value="homosexual">Homosexual</option>
                    <option value="Bi-sexual">Bi-sexual</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                <button onClick={setStep(step + 1)}>Next<button/> */}
        </div>
    )
};

export default SexualOrientation;