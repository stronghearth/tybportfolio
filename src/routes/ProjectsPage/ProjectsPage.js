import React, {Component} from 'react'
import project_store from '../../project_store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
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
                <div className="projectRow">
                {project_store.projects.map(project => 
                        <div className="individualProject" key={project.id}>
                            <h3 className="projectName">{project.name}</h3>
                            <img src={isMobile ? project.screenshots_mobile[0].original : project.screenshots_desktop[0].original} alt={project.name} className="mainScreenShot"/>

                            <div role="button" className="suggestionButton projectButton"><Link to={`/projects/${project.id}`} className="buttonLink">More Info</Link></div>       
                        </div>)}
                </div>
                <FontAwesomeIcon className="ellipsis" size="lg" icon={faEllipsisH} aria-disabled={true}/>    
                <h3>More to Come!</h3>
            </section>
        )
    }
}