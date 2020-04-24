import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ImageGallery from 'react-image-gallery'
import './ExpandedProject.css';


export default class ExpandedProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMobile: false
        }
        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener('resize', this.updatePredicate)
    }

    updatePredicate() {
        this.setState({ isMobile: window.innerWidth < 1000})
    }
    render() {
        const {isMobile} = this.state
        const parameter = this.props.match.params.projectid
        const currentProject = this.props.projects[parameter - 1]
        return (
            <section className="projectSection projectSingle">
            <h2>{currentProject.name}</h2>
            <div className="languages">{currentProject.languageIcons}</div>
            <p className="projectDescription">{currentProject.description}</p>
            <div className="projectLinks">
                <a href={currentProject.liveApp} className="projectLink" target="/blank">Live App</a>
                <a href={currentProject.client} className="projectLink" target="/blank">Client Repo</a>
                <a href={currentProject.server} className="projectLink" target="/blank">Server Repo</a>
            </div>
            
            <h3>Screenshot Gallery</h3>
            <ImageGallery items={ isMobile ? currentProject.screenshots_mobile : currentProject.screenshots_desktop } slideDuration={1000} showBullets={true} showThumbnails={false}/>
            <div role="button" className="suggestionButton"><Link className="buttonLink" to='/projects'>Go Back to Projects</Link></div>
            </section>
        )
    }
}