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

function Form({ currentUser, setCurrentUser }) {
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
  console.log(formData)
  console.log(currentUser)

  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData)
  }

  function handleNext(e) {
    e.preventDefault()
    setCurrentStep((currentStep) => currentStep + 1);
  }


  function handlePrevious(e) {
    e.preventDefault()
    setCurrentStep(currentStep - 1);
  }

  function handleQuestionnaire(e) {
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
        history.push('/profile')
      })

  }

  return (
    <div>

      {currentStep === 0 ? <SignUp formData={formData} handleChange={handleChange} currentStep={currentStep} setCurrentStep={setCurrentStep} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : null}
      <form onSubmit={handleQuestionnaire}>
        {currentStep === 1 ? <Age formData={formData} handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 2 ? <Gender formData={formData} handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 3 ? <Race formData={formData} handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 4 ? <SexualOrientation formData={formData} handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 5 ? <Religion formData={formData} handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 6 ? <ProChoice handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 7 ? <City handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 8 ? <FavSport handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 9 ? <PoliticalParty handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 10 ? <FavCuisine handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 11 ? <FavBook handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 12 ? <FavMovie handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}
        {currentStep === 13 ? <FavCity handleChange={handleChange} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={currentStep} /> : null}


        {/* {currentStep > 1 ? <button onClick={handlePrevious}>Previous</button> : null}
          {currentStep < 13 && currentStep > 0 ?  <button onClick={handleNext}>Next</button> : null} */}
        {currentStep === 13 ? <button class='submit' align='center' type="submit">Submit your form</button> : null}
      </form>
    </div>
  );
}

export default Form;
