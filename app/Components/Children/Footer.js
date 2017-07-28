import React from 'react';

const Footer = (props) => {
	return(
		<div className='footer'>
			<div className='foot-icon'>
				<a href='https://www.linkedin.com/in/cristopher-ayala-paz/' target='_blank'>
					<i className=" fa-icon fa fa-linkedin-square" aria-hidden="true"></i>
				</a>
			</div>
			<div className='foot-icon'>
				<a href='https://github.com/crisayala16' target='_blank'>
					<i className="fa-icon fa fa-github" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
}
export default Footer;