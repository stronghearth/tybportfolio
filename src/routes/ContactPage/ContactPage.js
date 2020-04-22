import React, {Component} from 'react'
import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default class ContactPage extends Component {
    render() {
        return (<section className="contactSection">
            <section className="contactMenu">
            <h2 className="pageSubheading">Contact Me</h2>
            <p>You may use the following to get in touch with me:</p>
            <div className="contactRowOne">
                <a href="mailto:taylordyoung1@gmail.com" target="/blank"><FontAwesomeIcon role="link" icon={faEnvelopeSquare} className="icons firstIcon" size="6x"/></a>
                <a href="https://www.linkedin.com/in/taylorybradshaw/" target="/blank"><FontAwesomeIcon role="link" icon={faLinkedin} className="icons" size="6x"/></a>
            </div>
            <div className="contactRowTwo">
                <a href="https://github.com/stronghearth" target="/blank"><FontAwesomeIcon role="link" icon={faGithubSquare} className="icons firstIcon" size="6x"/></a>
                <a href="https://twitter.com/stronghearth45" target="/blank"><FontAwesomeIcon role="link" icon={faTwitterSquare} className="icons" size="6x"/></a>
            </div>
            </section>
            </section>
        )
    }
}