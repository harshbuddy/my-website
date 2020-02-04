import React, { Component } from 'react';


class Project extends Component {

	render () {

		return (

			<section className="section">
			<div class="tile is-ancestor">

				<div class="tile is-4 is-vertical is-parent">
					
					<div class="tile is-child box">
						<p class="title has-text-centered is-size-4">ReminderX</p>
						<figure class="image is-4by3">
           					<img className="projectPic" src="../images/reminderx.jpg"></img>
           				</figure>
						
						<p>Developed a pill dispenser which could be configured using a Smart Chat Bot or voice activated interface to target multiple demographics.The hardware had the capacity of holding up to 45 pills, which were individually identified using an optic sensor validating which pill needed to be dispensed.</p>
						<a className="DevpostLink" href="https://devpost.com/software/reminderx">Devpost</a>
					</div>

				</div>

				<div class="tile is-4 is-vertical is-parent">

					<div class="tile is-child box">
					<p class="title has-text-centered is-size-4">When We Listen</p>
						<figure class="image is-4by3">
           					<img className="projectPic" src="../images/whenwelisten.jpg"></img>
           				</figure>
						<p>Using Indico's Emotional Analysis API and Microsoft Text Analytics, this application would provide an average mental health rating for the Twitter account entered by the user. This was inspired by on going Mental Health issues in young adults as suicide prevention is something which is not discussed as much as it should be.</p>
						<p><strong>Winner at HackWestern IV</strong></p>
						<a className="DevpostLink" href="https://devpost.com/software/unnamed">Devpost</a>
					</div>

				</div>

				<div class="tile is-4 is-vertical is-parent">
					
					<div class="tile is-child box">
						<p class="title has-text-centered is-size-4">FortiFlex</p>
						<figure class="image is-4by3">
           					<img className="projectPic" src="../images/fortiflex.jpg"></img>
           				</figure>
						<p>With the growth of wearable tech, this solution provided individuals a way to perform physiotherapy exercises for their arms using the Myo Armband while tracking their progress using a web dashboard.</p>
						<p> <strong>Best Healthcare Hack Runner Up at Hack Yale 2017</strong></p>
						<a className="DevpostLink" href="https://devpost.com/software/fortiflex">Devpost</a>
					</div>

				</div>

				
			</div>


			<div class="tile is-ancestor">

				<div class="tile is-4 is-vertical is-parent">
					
					<div class="tile is-child box">
						<p class="title has-text-centered is-size-4">Personal Website</p>
						<figure class="image is-4by3">
           					<img className="projectPic" src="../images/website.png"></img>
           				</figure>
						<p>Developed using React, Bulma and various React libraries to display my personal portfolio for those interested hosted through Github Pages.</p>
						<a className="DevpostLink" href="https://github.com/harshbuddy/Personal-Website">Github</a>
					</div>

				</div>
				

				<div class="tile is-4 is-vertical is-parent">
					
					<div class="tile is-child box">
						<p class="title has-text-centered is-size-4">Pulse</p>
						<figure class="image is-4by3">
           					<img className="projectPic" src="img/pulse2.jpg"></img>
           				</figure>
						<p>Developed using React Native, PyTesseract, MongoDB and Firebase allowing users to book medical appointments to a nearby clinic with a mobile app which then sends patient data to a dashboard for medical professionals aiming to decrease walk-in clinic wait times.</p>
						<p><strong>Best Technical Implementation at EnactusHacks</strong></p>
						<a className="DevpostLink" href="https://github.com/harshbuddy/EnactusHacks"> Github  </a>

						<a className="DevpostLink" href="https://devpost.com/software/pulse-nmoytv"> Devpost </a>
					</div>

				</div>

				
			</div>
			</section>
			)

		}
	}

	export default Project;