import React, {Component} from 'react'
import project_store from '../../project_store'
import ExpandedProject from '../../components/ExpandedProject/ExpandedProject'
import './ProjectsPage.css'

export default class ProjectsPage extends Component {
    render() {
        return (
            <section className="projectSection">
                <h2 className="pageSubheading">My Projects</h2>
                {project_store.projects.map(project => 
                        <>
                            <h3>{project.name}</h3>
                            {project.screenshots[0]}
                        </>)}
            </section>
        )
    }
}