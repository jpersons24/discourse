import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Age from "./Age";
import SignUp from './SignUp'
import Gender from "./Gender";
import Race from "./Race";
import SexualOrientation from "./SexualOrientation";

function Form({currentUser, setCurrentUser}) {
  // state for user info values
const [active, setActive] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    age: null,
    gender: "",
    race: "",
    sexual_orientation: "",
    city: "",
    political_party: "",
    religion: "",
    pro_choice: null,
    fav_sport: "",
    fav_cuisine: "",
    fav_book_genre: "", 
    fav_city: "",
    fav_movie_genre: "",
  });

  // state for current step
  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory()

  // handle change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  function handleNext(e) {
    e.preventDefault()
    setCurrentStep((currentStep ) => currentStep + 1);
  }


  function handlePrevious(e) {
    e.preventDefault()
    setCurrentStep(currentStep - 1);
  }

function handleQuestionnaire(e){
  e.preventDefault()

  fetch(`http://localhost:3001/users/${currentUser.user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          setCurrentUser(data)
          history.push('/chat')
        })

}

  return (
    <div>
      <h1>Info Form</h1>
        {currentStep === 0 ? <SignUp formData={formData} handleChange={handleChange} currentStep={currentStep} setCurrentStep={setCurrentStep} currentUser={currentUser} setCurrentUser={setCurrentUser}/> : null}
        <form onSubmit = {handleQuestionnaire}>
          {currentStep === 1 ? <Age formData={formData} handleChange={handleChange} /> : null}
          {currentStep === 2 ? <Gender formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 3 ? <Race formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 4 ? <SexualOrientation formData={formData} handleChange={handleChange}/> : null}
        
          {currentStep > 1 ? <button onClick={handlePrevious}>Previous</button> : null}
          {currentStep < 4 && currentStep > 0 ?  <button onClick={handleNext}>Next</button> : null}
          {currentStep === 4 ? <button type = "submit">Submit your form</button> : null }
        </form>

      
      {/* {nextButton}
      {previousButton} */}
    </div>
  );
}

export default Form;
