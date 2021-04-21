import { useState } from 'react';

function ProChoice({ setFormData, formData, handleChange}) {

   const [clicked, setClicked] = useState(false);

   function handleClick(e) {
      setClicked((clicked) => !clicked)
      console.log(e.target)
      setFormData({ ...formData, [e.target.name]: clicked})
   }

   

   return (
      <div>
            <div>
                <input type="checkbox" onChange={} id="pro_choice" name="pro_choice" value={formData.pro_choice} />
                    
                <label for="pro_choice">Pro Choice?</label>
            </div>

            
      </div>
   )
}

export default ProChoice;