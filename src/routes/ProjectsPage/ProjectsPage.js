import React, {Component} from 'react'
import project_store from '../../project_store'
import {Link} from 'react-router-dom'
import './ProjectsPage.css'

export default class ProjectsPage extends Component {
    render() {
        return (
            <section className="projectSection">
                <h2 className="pageSubheading">My Projects</h2>
                {project_store.projects.map(project => 
                        <>
                            <h3>{project.name}</h3>
                            <img src={project.screenshots[0].original} alt={project.name} className="mainScreenShot"/>

                        <Link to={`/projects/${project.id}`}>More Info</Link>       
                        </>)}

                <p>More to Come!</p>
            </section>
        )
    }
}