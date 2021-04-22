function ProChoice({ handleChange}) {


   return (
      <div>
         <div>
            <label>Pro Choice</label>
            <input type="radio" name="pro_choice" id="pro_choice" value={true} onChange={handleChange}/> 
         </div>
         <div>
            <label>Pro Life</label>
            <input type="radio" name="pro_choice" id="pro_life" value={false} onChange={handleChange} />
         </div>
      </div>
   )
}

export default ProChoice;