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
    console.log(formData);
  }

  // handle submit
  // form submit button displayed on final step only
  // function handleSubmit(e) {
  //    e.preventDefault();
  //    console.log(e.target)
  // };

  function handleNext() {
    setCurrentStep(currentStep + 1);
  }

  // handle next click
  // logic to increase currentStep state by 1
  function next() {
    //  setCurrentStep(currentStep);
    if (currentStep < 4) {
      return (
        <>
          <button onClick={handleNext}>Next</button>
        </>
      );
    } else {
      return null;
    }
  }

  function handlePrevious() {
    setCurrentStep(currentStep - 1);
  }

  // handle previous click
  // logic to decrease currentStep state by 1
  const previousButton = function previous() {
    //  setCurrentStep(currentStep);
    if (currentStep !== 1) {
      return (
        <>
          <button onClick={handlePrevious}>Previous</button>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Info Form</h1>
      <form>
        <Age formData={formData} handleChange={handleChange} />
        {/* Step2 */}
        {/* Step3 */}
      </form>

      
      {/* {nextButton}
      {previousButton} */}
    </div>
  );
}

export default Form;
