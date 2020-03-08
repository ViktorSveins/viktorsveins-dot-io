import React from 'react';
import './landingpage-style.scss';
import profile from '../../../assets/images/profile.jpg';
import me from '../../../assets/images/me.png';
import mag from '../../../assets/images/mag.png';
import SocialMedia from '../../SocialMedia/SocialMedia';

const LandingPage = () => {
	return (
		<div className='landing'>
			<img src={mag} className='mag-pointer' alt='my awesome girlfriend pointer' />
			<img src={profile} className='profile-picture' alt='profile' />
			<img src={me} className='me-pointer' alt='me pointer' />
			<SocialMedia />
		</div>
	)
}

export default LandingPage;