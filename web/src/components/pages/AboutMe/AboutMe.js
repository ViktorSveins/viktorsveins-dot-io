import React from 'react';
import './aboutme-style.scss';
import me from '../../../assets/images/funphoto.jpg';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <img src={me} className='about-picture' alt='me' />
      <div className='bio'>
        <h2>Hi there!</h2>
        <p>
          My name is Viktor Sveinsson and my favourite color is cyan. <br />
          I code stuff. Web solutions, video games, buisness tools, you name it!
          I like to have fun, make fun and cook trouble.
        </p>
        <p>
          I’m from Iceland, the land of fire and ice, which basically means I start with +1 in both fire resistance and ice resistance
        </p>
        <p>
          Before I started coding I used to do volcanic culinery. <br /> 
          Wait what?!<br />
          Yup, I used to cook and bake stuff by burying goods in the ground in an active hotspring area, using the earth as my oven. <br />
          Don´t belive me? <a href='https://www.youtube.com/watch?v=vz-7iUw8Sl0'>Check this out</a>.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;