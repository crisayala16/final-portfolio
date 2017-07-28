import React from 'react';
import Cover from './Children/Cover';
import NavbarInstance from './Children/NavbarInstance';
import About from './Children/About';
import Skills from './Children/Skills';
import Portfoliio from './Children/Portfolio';
import Contact from './Children/Contact';
import {Route} from 'react-router-dom';
import Footer from './Children/Footer';

class Main extends React.Component{
	render(){	
		return(
			<div className='out-container'>
				<NavbarInstance/>
				<Route exact path='/' component={Cover}/>
				<Route path='/about' component={About}/>
				<Route path='/skills' component={Skills}/>
				<Route path='/portfolio' component={Portfoliio}/>
				<Route path='/contact' component={Contact}/>
				<Footer/>
			</div>
		);
	}
}

export default Main;