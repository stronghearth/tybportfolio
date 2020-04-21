import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (<section className="homePageContainer">
            <h2 className="fullName"><span>T</span>aylor <span>Y.</span> <span>B</span>radshaw</h2>
            <p className="headline">building websites with strong foundations...</p>

            <div role="button" className="getToKnow"><Link to="/about" className="buttonLink"> Get to Know  <FontAwesomeIcon icon={faChevronRight}/></Link></div>
            </section>
        )
    }
}