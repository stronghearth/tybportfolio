import React, {Component} from 'react'
import project_store from '../../project_store'
import {Link} from 'react-router-dom'
import './ProjectsPage.css'

export default class ProjectsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMobile: false
        }
        this.updatePredicate = this.updatePredicate.bind(this)
    }

    updatePredicate() {
        this.setState({ isMobile: window.innerWidth < 1000})
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener('resize', this.updatePredicate)
    }

 

    render() {
        const {isMobile} = this.state
        return (
            <section className="projectSection">
                <h2 className="pageSubheading">My Projects</h2>
                {project_store.projects.map(project => 
                        <>
                            <h3>{project.name}</h3>
                            <img src={isMobile ? project.screenshots_mobile[0].original : project.screenshots_desktop[0].original} alt={project.name} className="mainScreenShot"/>

                        <Link to={`/projects/${project.id}`}>More Info</Link>       
                        </>)}

                <p>More to Come!</p>
            </section>
        )
    }
}