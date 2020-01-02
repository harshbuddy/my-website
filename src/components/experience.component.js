import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';



class Experience extends Component {

  static defaultProps = {
    description: []
  };
  

  render() {

    let { 
      img, 
      company, 
      position, 
      location, 
      dates, 
      description 
    } = this.props;

    let descriptionBullets = []
    for (let i = 0; i < description.length; i++) {
      let d = description[i];

      let marginLeft = 0;
      if (d[0] === "-") {
        d = d.substring(1);
        marginLeft = 20;
      }

      descriptionBullets.push(
        <li key={i} style={{marginLeft}}>
          {d}
        </li>
      );
    }

    return (

    <FadeIn>
      <div className="card experience-card">
        <article className="media">
          <div className="media-content level ">
            <p className="image">
              <img src={img} alt=""/>
            </p>
          </div>
          <div className="level-item card inside-exp">
            <div className="content">
              <h1 className="title">{position}</h1>
              <p>
                {company} - {location}
                <br/>
                <small>{dates}</small>
              </p>
              <ul>
                {descriptionBullets}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </FadeIn>

    );
  }
}

Experience.propTypes = {
  img: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.array
};

export default Experience;