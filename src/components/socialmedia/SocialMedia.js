import React from 'react';
import fbIcon from '../../assets/images/icon-facebook.png';
import igIcon from '../../assets/images/icon-instagram.png';
import inIcon from '../../assets/images/icon-linkedin.png';
import ghIcon from '../../assets/images/icon-github.png';
import './socialmedia-style.scss'

const SocialMedia = () => {
	return (
		<div className='social-media'>
			<div className='medias'>
				<a href='https://www.linkedin.com/in/viktor-sveinsson-333502162/'>
					<img src={inIcon} alt='linkedin-icon' />
				</a>
				<a href='https://www.facebook.com/viktorsveins'>
					<img src={fbIcon} alt='facebook-icon' />
				</a>
				<a href='https://www.instagram.com/viktorljosberi/'>
					<img src={igIcon} alt='instagram-icon' />
				</a>
				<a href='https://github.com/ViktorSveins'>
					<img src={ghIcon} alt='github-icon' />
				</a>
			</div>
		</div>
	)
}

export default SocialMedia;