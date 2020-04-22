import React, {Component} from 'react'
import me from '../../assets/me.jpg'
import {Link} from 'react-router-dom'
import './AboutPage.css'

export default class AboutPage extends Component {
    render() {
        return (<section className="aboutSection">
            <h2 className="pageSubheading">About Me</h2>
            <div className='infoDiv'>
            <img src={me} className="me" alt="Taylor Bradshaw"/>
            <div className="myInformation">
                <p className="myDescription">I am a burgeoning full-stack web developer based in Raleigh, NC. One of my professional writing courses in college introduced me to basic HTML and CSS which I really enjoyed. I have since tried other potential career paths, but I rediscovered coding, and I decided to give it a real shot.</p>
                <p className="myDescription">What sold me on coding is that you get a tangible result from your work and that you get to work through problems with a team around you. I love having creative outlets, including many forms of storytelling and art, but I also thrive from working with technology.</p>
                <p className="myDescription">When I am not coding, I am either hanging out with my husband and playing with my little fluff pup, or I am creatively solving fantasy world challenges with my friends playing Dungeons and Dragons. As you can see, I’m an all-around nerd!</p>
            </div>
            </div>
            <div className="buttonDiv">
                <div role="button" className="suggestionButton"><Link to="/projects" className="buttonLink">My Projects</Link></div>
                <div role="button" className="suggestionButton"><Link to="/contact" className="buttonLink">Contact Me</Link></div>
            
            </div>
        </section>
            
        )
    }
}