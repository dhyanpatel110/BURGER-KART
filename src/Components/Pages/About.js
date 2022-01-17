import React from 'react'
import aboutimage from '../Assets/images/about1.jpg'

const About = () => {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>only $2 you get Medium French Fries + veggie burger</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
        </div>
    )
}

export default About
