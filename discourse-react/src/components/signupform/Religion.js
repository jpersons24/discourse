function Religion({handleChange}) {
   return (
      <div>
         <label for="religion">Religion:</label>
                <select onChange={handleChange} name="religion" id="religion">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="christianity">Christianity</option>
                    <option value="jewish">Jewish</option>
                    <option value="buddhism">Buddhism</option>
                </select>
      </div>
   )
}

export default Religion;