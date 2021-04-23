import { useState } from 'react'

function About() {

    const [clicked, setClicked] = useState(false)

    function handleClick() {

        setClicked(!clicked)
    }

    return (
        <div>
            <div class="about-page">
                <button onClick={handleClick} class='submit' > CLICK ME RIGHT NOW</button>
            </div>

            {clicked ?
                <div>

                    <img align='center' src="https://media1.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif"></img>
                    <img align='center' src="https://media.giphy.com/media/3i6miyv9Res7utKNdb/giphy.gif"></img>
                    <img align='center' src='https://media.giphy.com/media/d8zxusduYsTUitrAPk/giphy.gif'></img>

                </div> : null}



        </div>
    )
};

export default About;