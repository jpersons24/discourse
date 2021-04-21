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
        </div>
    )
};

export default Age;