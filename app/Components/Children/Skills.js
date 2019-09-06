import React from 'react';

const Skills = (props) => {
	return (
		<div id="skills">
			<p id="skills-title" className="animated fadeInDown center-text">Skills</p>
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
							<i className="devicon-react-original-wordmark colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-typescript-plain colored"></i>
						</li>
						<li className="skill-item">
							<i className="devicon-angularjs-plain colored"></i>
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
							<i className="devicon-tomcat-line-wordmark"></i>
						</li>
						<li className='skill-item'>
							<i className="devicon-csharp-line colored"></i>
						</li>
						<li className='skill-item'>
							<i className="devicon-dot-net-plain-wordmark colored"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Skills;