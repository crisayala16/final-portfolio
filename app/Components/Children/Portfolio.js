import React from 'react';

const Portfolio = (props) => {
	return(
		<div id="portfolio">
			<p id="portfolio-title" className="center-text">Portfolio</p>
			<div id="port-group">
				<div className='row'>
				<div className="col-4">
					<div className="port-item">
						<a target='_blank' href="https://maritant.herokuapp.com/#/">
							<div id="port2">
								<div className="hover-box">

								</div>
							</div>
						</a>
					</div>
					<div className='port-desc'>
						<p>
							
						</p>
					</div>
				</div>
				</div>
				<div className='row'>
				<div className="col-4">
					<div className="port-item">
						<a target='_blank' href="https://inventory-manager-ease.herokuapp.com/">
							<div id="port0">
								<div className="hover-box">

								</div>
							</div>
						</a>
					</div>
					<div className='port-desc'>
						<p>

						</p>
					</div>
				</div>
				</div>
				<div className='row'>
				<div className="col-4">
					<div className="port-item">
						<a target='_blank' href="https://crisayala16.github.io/Recipe-App/">
							<div id="port1">
								<div className="hover-box">

								</div>
							</div>
						</a>
					</div>
					<div className='port-desc'>
						<p>
							
						</p>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
export default Portfolio;