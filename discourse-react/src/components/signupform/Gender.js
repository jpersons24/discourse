function Gender({handleChange, formData}){
    
    return(
        <div>
             <label for="gender">What is your gender?</label>
                <select name="gender" id="gender"  onChange={handleChange}>
                <option value="" selected disabled hidden>Choose here</option>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="trans">Trans</option>
                </select>
                {/* <button onClick={setStep(step - 1)}>Previous<button/>
                <button onClick={setStep(step + 1)}>Next<button/> */}
            
        </div>
    )
};

export default Gender;