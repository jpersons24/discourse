function Age({ formData, handleChange }){
    
    return(
        <div>
            <label>How old are you?</label>
            <input 
                type="number" 
                name="age" 
                value={formData.age}
                onChange={handleChange}
            />
            {/* <button onClick={setStep(step - 1)}>Previous<button/>
            <button onClick={setStep(step + 1)}>Next<button/> */}
            
        </div>
    )
};

export default Age;