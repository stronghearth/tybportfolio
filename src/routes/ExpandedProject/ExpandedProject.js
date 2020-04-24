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
            <section className="projectSection">
            <h2>{currentProject.name}</h2>
            <ImageGallery items={ isMobile ? currentProject.screenshots_mobile : currentProject.screenshots_desktop } slideDuration={1000} autoPlay={true} showBullets={true} showThumbnails={false}/>
            <p>{currentProject.description}</p>
            <div className="languages">{currentProject.languageIcons}</div>
            <Link to='/projects'>Go Back to Projects</Link>
            </section>
        )
    }
}