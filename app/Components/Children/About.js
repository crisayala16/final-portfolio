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
						​I am a team-oriented Full Stack Developer with a background in the MERN (MongoDB, Express, React, Node) Stack. Although I started with the MERN stack, I’ve also acquired some decent experience in C#, ASP.NET, Angular 7, and SQL/Relational databases. I enjoy picking up new technologies and aim to always follow best practices and implement the latest up to date technology when possible.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;