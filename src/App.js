import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import './sass/app.scss';

//utils
import { isMobileOrTablet } from './utils/device';


//components
import NavBar from './components/nav-bar.component';
import AboutMe from './components/about-me.component';
import Experience from './components/experience.component';
import Project from './components/project.component';
import Skills from './components/skills.component';
import Footer from './components/footer.component';


//data
import experience from './data/experience';


class App extends React.Component {

  renderExperience = () => {
    let cards = [];
    for (let i = 0; i < experience.length; i++) {
      const e = experience[i];
      cards.push(
          <Experience
            key={i}
            img={e.img}
            position={e.position}
            company={e.company}
            location={e.location}
            dates={e.dates}
            description={e.description}
          />
      );
    }

    return cards;
  }

  render() {
    return (

      <React.Fragment>

      <NavBar />

      <main id="top" style={{marginTop:25}}>

        <AboutMe/>

        <div id="expSec" style={{maxWidth: "1075px", margin: "auto"}}>
          <h1 className="title" style={{marginLeft:20}}>Experience</h1>
          {this.renderExperience()}
        </div>

        <div id="proSec" style={{maxWidth: "1075px", margin: "auto", marginTop:150}}>
          <h1 className="title" style={{marginBottom:-25, marginLeft:20}}>Projects</h1>
          <Project/>
        </div>

        <div id="skillsSec" style={{maxWidth: "1075px", margin: "auto", marginTop:150}}>
          <h1 className="title" style={{marginBottom:-25, marginLeft:15}}>Skills</h1>
          <Skills/>
        </div>



        <Footer/>

      </main>


      </React.Fragment>



    
    );
  }
}
export default App;