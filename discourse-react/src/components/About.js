import { useState } from 'react'

function About() {

    const [clicked, setClicked] = useState(false)

    function handleClick() {

        setClicked(!clicked)
    }

    return (
        <section id="about">
            <div class="rules-box">
                    <h1 align="center">What is Discourse</h1>
                    <p align="center">Discourse - written or spoken communication or debate.</p>
                    <p align="center">
                        Discourse is a place for people to be connected with others and engage in open conversation.
                        <br/>
                        <br/>
                        You will be matched with other users based on certain criteria. From that point, it's up to you to engage
                        with your match, talking about anything and everything. If your conversation needs a little push, we've got you
                        covered with conversation topics that appeal to both users using an algorithm based approach.
                        <br/>
                        <br/>
                        All we ask is you consider and abide by the 'Discourse Guidelines' we've set to ensure
                        everyone has a pleasant and meaningful experience.
                    </p> 
                </div>
        </section>
    )
};

export default About;