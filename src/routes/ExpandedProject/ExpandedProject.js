import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ExpandedProject.css';


export default class ExpandedProject extends Component {
    render() {
        const parameter = this.props.match.params.projectid
        const currentProject = this.props.projects[parameter - 1]
        return (
            <section className="projectSection">
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
            <div className="languages">{currentProject.languageIcons}</div>
            <Link to='/projects'>Go Back to Projects</Link>
            </section>
        )
    }
}