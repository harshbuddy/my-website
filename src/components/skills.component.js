import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Python',
		'JavaScript',
		'C++',
		'C#',
		'Java'
	],
	datasets: [{
		data: [200, 185, 75, 25, 75],
		backgroundColor: [
		'#8f0a00',
		'#00268f',
		'#540170',
		'#7d015c',
		'#004f03', 
		],
		hoverBackgroundColor: [
		'#8f0a00',
		'#00268f',
		'#540170',
		'#7d015c',
		'#004f03'
		]
	}]
};



class Skills extends Component {

	render () {

		return (

			<section className="dataSetArea">
				<div className="level">
				<div className="level-left">
				<Doughnut data={data} height={400}  options={{ maintainAspectRatio: false }}/>
				</div>
				<div className="level-item" style={{marginLeft:150}}>
				<h1 className="subtitle"><strong>Libraries, Frameworks and Platforms</strong>
				<ul className="is-size-6 has-text-centered" style={{paddingTop:25}}>
				<li className="moreSkills">OpenCV</li>
				<li className="moreSkills" style={{paddingTop:10}}>Tensorflow</li>
				<li className="moreSkills" style={{paddingTop:10}}>Docker</li>
				<li className="moreSkills" style={{paddingTop:10}}>AWS & GCP</li>
				<li className="moreSkills" style={{paddingTop:10}}>Google Firebase</li>
				<li className="moreSkills" style={{paddingTop:10}}>Heroku</li>
				<li className="moreSkills" style={{paddingTop:10}}>NodeJS</li>
				</ul>


				</h1>
				
				</div>
				</div>
			</section>

		)

	}
}

export default Skills;