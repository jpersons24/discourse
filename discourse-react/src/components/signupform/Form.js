import { useState } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Race from "./Race";
import SexualOrientation from "./SexualOrientation";

function Form() {
  // state for user info values
  const [formData, setFormData] = useState({
    age: null,
    gender: "",
    race: "",
    sexual_orientation: "",
  });
  // state for current step
  const [currentStep, setCurrentStep] = useState(1);
  console.log(currentStep);

  // handle change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
  }
  console.log(formData);
  // handle submit
  // form submit button displayed on final step only
  // function handleSubmit(e) {
  //    e.preventDefault();
  //    console.log(e.target)
  // };

  function handleNext(e) {
    e.preventDefault()
    setCurrentStep((currentStep ) => currentStep + 1);
  }

 
  

  function handlePrevious(e) {
    e.preventDefault()
    setCurrentStep(currentStep - 1);
  }

function handleSubmit(e){
  return(<div>hi</div>)
}

  return (
    <div>
      <h1>Info Form</h1>
      <form onSubmit = {handleSubmit}>
      {currentStep === 1 ? <Age formData={formData} handleChange={handleChange} /> : null}
      {currentStep === 2 ? <Gender formData={formData} handleChange={handleChange}/> : null}
      {currentStep === 3 ?  <Race formData={formData} handleChange={handleChange}/> : null}
      {currentStep === 4 ?  <SexualOrientation formData={formData} handleChange={handleChange}/> : null}
       
        {/* Step2 */}
        {/* Step3 */}
        {currentStep !== 1 ? <button onClick={handlePrevious}>Previous</button> : null}
        {currentStep < 4 ?  <button onClick={handleNext}>Next</button> : null}
        {currentStep === 4 ? <button type = "submit">Submit your form</button> : null }
      </form>

      
      {/* {nextButton}
      {previousButton} */}
    </div>
  );
}

export default Form;
