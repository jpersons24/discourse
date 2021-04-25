import { useState } from 'react'

function About() {

    const [clicked, setClicked] = useState(false)

    function handleClick() {

        setClicked(!clicked)
    }

    return (
        <div>
            <div class="about-page">
            
            </div>
        </div>
    )
};

export default About;