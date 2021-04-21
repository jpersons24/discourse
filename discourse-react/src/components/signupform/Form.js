import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Age from "./Age";
import SignUp from './SignUp'
import Gender from "./Gender";
import Race from "./Race";
import SexualOrientation from "./SexualOrientation";
import City from './City';
import PoliticalParty from './PoliticalParty';
import Religion from './Religion';
import ProChoice from './ProChoice';
import FavSport from './FavSport';
import FavCuisine from './FavCuisine';
import FavBook from './FavBook';
import FavMovie from './FavMovie';
import FavCity from './FavCity';

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
    pro_choice: false,
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
          {currentStep === 5 ? <Religion formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 6 ? <ProChoice formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 7 ? <City formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 8 ? <FavSport formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 9 ? <PoliticalParty formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 10 ? <FavCuisine formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 11 ? <FavBook formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 12 ? <FavMovie formData={formData} handleChange={handleChange}/> : null}
          {currentStep === 13 ? <FavCity formData={formData} handleChange={handleChange}/> : null}

        
          {currentStep > 1 ? <button onClick={handlePrevious}>Previous</button> : null}
          {currentStep < 13 && currentStep > 0 ?  <button onClick={handleNext}>Next</button> : null}
          {currentStep === 13 ? <button type = "submit">Submit your form</button> : null }
        </form>

      
      {/* {nextButton}
      {previousButton} */}
    </div>
  );
}

export default Form;
