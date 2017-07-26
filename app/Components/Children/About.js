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
						I am a team-oriented full stack developer who is passionate about collaboration and continuous improvement. I enjoy using the MERN Stack to create user-friendly and efficient web applications. I am always on the hunt for the best tools and technology to not only benefit my work, but as well as my peers work.
					</p>
					<p className="open-statement">
						I am currently enrolled at the George Washington Coding Bootcamp and am loving every second of it. We are constantly being put in a fast paced enviornment, forcing us to learn quickly and adapt to new technology. This has come to be very gratifying and rewarding for me, and I can't wait to actually apply this in the real world.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;