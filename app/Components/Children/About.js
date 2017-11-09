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
						​I am a team-oriented Full Stack Developer with a strong focus on the MERN Stack (MongoDB, Express, React, Node). Although I enjoy working on an agile team, I’m also capable of working alone to build top-notch products. I enjoy picking up new technologies and aim to incorporate new technologies or tools into every project I work on.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;