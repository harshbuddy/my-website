import React, { Component } from 'react';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mobileDropdown: false,
		};
	}

	toggleDropdown = () => {
		this.setState({
			mobileDropdown: !this.state.mobileDropdown
		});
	}

	handleScrollTo = (section) => {
		this.toggleDropdown();
		this.props.scrollTo(section);
	}


	render() {

		return (

			<nav id="navbar" className="navbar" role="navigation">

				<div className="navbar-brand">
					<div id="navbar-item-name" className="navbar-item">
					<a href="#top">
						<button id="nameButton" className="is-link">
							HP
						</button>
					</a>
					</div>

					<button onClick={this.toggleDropdown} className={`navbar-burger burger is-link ${this.state.mobileDropdown ? 'is-active' : ''}`} data-target="nav-bar">
            			<span></span>
            			<span></span>
            			<span></span>
          			</button>
				</div>



				<div id="nav-bar" className={`navbar-menu ${this.state.mobileDropdown ? 'is-active' : ''}`}>
					<div className="navbar-end">
						<div className="navbar-item">
						<a href="#expSec">
							<button className="is-link section-link">
								Experience
							</button>
						</a>
						</div>
						<div className="navbar-item">
						<a href="#proSec">
							<button className="is-link section-link" >
								Projects
							</button>
						</a>
						</div>
						<div className="navbar-item">
						<a href="#skillsSec">
							<button className="is-link section-link">
								Skills
							</button>
						</a>
						</div>
						<div className="navbar-item">
						<a href="/files/resume.pdf">
							<button className="bigLink">
								Resume
							</button>
						</a>
						</div>
					</div>


				</div>

			</nav>

		)
	}

}

export default NavBar;