import React from 'react';

const Portfolio = (props) => {
	return(
		<div id="portfolio">
			<p id="portfolio-title" className="animated fadeInDown center-text">Portfolio</p>
			<div id="port-group">
				<div className='row'>
					<div className="col-4">
						<h3 className='port-title'>Maritant 2.0</h3>
						<div className="port-item">
							<a target='_blank' href="https://maritant.herokuapp.com/#/">
								<div id="port2">
								</div>
							</a>
						</div>
						<div className='port-desc'>
							<p>
								Maritant is a web application utilizing e-commerce technology to access marine equipment data and conduct
								purchasing transactions efficiently. I am currently a Intern, contributing to the database product filtering, login
								authentication, and csv file uploader.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className="col-4">
						<h3 className='port-title'>Inventory Manager</h3>
						<div className="port-item">
							<a target='_blank' href="https://inventory-manager-ease.herokuapp.com/">
								<div id="port0">
								</div>
							</a>
						</div>
						<div className='port-desc'>
							<a className='git-link' target='_blank' href='https://github.com/crisayala16/Inventory-Manager-Hospital'>Github Link</a>
							<p>
								Inventory Manager is very simple web application that allows anyone to add and keep track of their products. This application 
								has very simple product interaction features that include deleting products, selling products(limited), and a low inventory 
								caution reminder. I contributed to this project as both the Front End and Back End developer.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className="col-4">
						<h3 className='port-title'>Recipe App</h3>
						<div className="port-item">
							<a target='_blank' href="https://crisayala16.github.io/Recipe-App/">
								<div id="port1">
								</div>
							</a>
						</div>
						<div className='port-desc'>
							<a className='git-link' target='_blank' href='https://github.com/crisayala16/Recipe-App'>Github Link</a>
							<p>
								Recipe App is a web application that allows users to search recipes based on specific ingredients on hand.
								I contributed to this project as a Front End developer in developing the algorithm that uses the 
								Edamam Recipe Search API to find recipes based on the ingredients required.   							
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Portfolio;