import React from 'react';

const About = (props) => {
	return(
		<div id="about">
			<p id="about-me-title" className="animated fadeInDown center-text">
				About Me
			</p>
			<div>
				<img id="about-portrait" src="/images/me.jpg" alt="Cristopher Ayala Paz portrait"/>
			</div>
			<div>
				<div id="about-me-content">
					<p className="open-statement">
						I am a Team-oriented Full Stack Developer with a main focus in the MERN (MongoDB, Express, React, Node) Stack. Although I almost always prefer a team-oriented working environment, I am still able to work alone and preform all necessary components of a fully functional website.
						Picking up new technologies has become the norm for me. When starting a new project, I try to always incorporate some form of new tool or technology that is foreign to me.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;