import React from 'react';

const Skills = (props) => {
	return(
		<div id="skills">
			<p id="skills-title" className="center-text">Skills</p>
			<div id="skills-box">
				<p className="skill-type">Front End</p>
				<div className="skill-frontend">
					<ul className="ul-skill">
						<li className="skill-item">
							<i className="devicon-html5-plain-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-css3-plain-wordmark"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-javascript-plain colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-bootstrap-plain-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-jquery-plain-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-react-original-wordmark colored"></i>
						</li>
						<li className='skill-item'>
							<img className='handle-icon' src='/images/handlebars.png'/>
						</li>
					</ul>
				</div>
				<p className="skill-type">Back End</p>
				<div className="skill-backend">
					<ul className="ul-skill">
						<li className="skill-item">
							<i className="devicon-nodejs-plain-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-express-original-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-mysql-plain colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-mongodb-plain-wordmark colored"></i>
						</li>
						<li className='skill-item'>
							<i className="devicon-webpack-plain-wordmark colored"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Skills;