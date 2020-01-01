import React, { Component } from 'react';
import Typical from 'react-typical';
import FadeIn from 'react-fade-in';

						// <h2 className="subtitle is-size-6">
						// 	Hello, my name is
						// </h2>

class AboutMe extends Component {

	render () {


		return (

			<section className="hero is-large is-bold">
				<div className="hero-body">
					<div className="container">

						<FadeIn>
						<h1 className="title is-size-1">
							Harsh Patel
						</h1>
						</FadeIn>
						<Typical
							className="is-size-4"
							id="typingText"
							loop = {Infinity}
							wrapper='b'
							steps={[
								'',
								1500,
								
								'Software Engineer ',
								1500,

								'Designer ',
								1500,

								'AI Developer ',
								1500,

								'Content Creator ',
								1500,


							]}
						/>
						<div id="buttonHolder">
						<button className="bigLink">
						<a href = "mailto:hpate45@gmail.com?subject=Get-In-Touch&body=">
						Get In Touch
						</a>
						</button>
						</div>
					</div>
				</div>
			</section>

		)

	}
}

export default AboutMe;