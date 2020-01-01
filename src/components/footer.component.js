import React, { Component } from 'react';


import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

class Footer extends Component {

	render () {

		return (

			<section className="hero footer-hero is-small is-dark">

				<p className="has-text-centered" id="stayConnected">Stay Connected</p>

				<p className="has-text-centered mainLinks">
				<a className="socialLinks" href="https://github.com/harshbuddy"><FaGithub className="linksSocial"/></a>
				<a className="socialLinks" href="https://www.linkedin.com/in/harsh-patel1/"><FaLinkedinIn className="linksSocial"/></a>
				<a className="socialLinks" href="mailto:hpate45@gmail.com?subject=Get-In-Touch&body="><AiOutlineMail className="linksSocial"/></a>
				<a className="socialLinks" href="https://www.instagram.com/harshbuddy98/"><FaInstagram className="linksSocial"/></a>
				<a className="socialLinks" href="https://www.facebook.com/harshbuddy98"><FaFacebookF className="linksSocial"/></a>
				</p>


				<p className="copyrightText is-size-6 has-text-centered">
          			Copyright © 2019 Harsh Patel
        		</p>
			</section>

		)

	}
}

export default Footer;