import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faDungeon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: false,
            menuOpen: false
        }
        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount () {
        this.updatePredicate()
        window.addEventListener('resize', this.updatePredicate)
    }

    updatePredicate() {
        this.setState({ isMobile: window.innerWidth < 1000})
    }

    renderHamburgerMenu() {
        return <>
        <ul className="NavList">
            <li><Link to='/about' className="NavLink">About Me</Link></li>
            <li><Link to='/projects' className="NavLink">Projects</Link></li>
            <li><Link to='/contact' className="NavLink">Contact Me</Link></li>
        </ul>
        <FontAwesomeIcon icon={faChevronUp} role="button" className="HomeLink" onClick={e => this.closeMenu()}/>
        </>
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }

    openMenu() {
        this.setState({
            menuOpen: true
        })
    }

    renderNavList() {
        return <ul className="NavList">
                    <li><Link to='/about' className="NavLink">About Me</Link></li>
                    <li><Link to='/projects' className="NavLink">Projects</Link></li>
                    <li><Link to='/contact' className="NavLink">Contact Me</Link></li>
                </ul>
    }

    render() {
        const {isMobile, menuOpen} = this.state 
        return <section className="NavBar" role="navigation">
            <h1><Link to='/' className="HomeLink"><FontAwesomeIcon icon={faDungeon}/> T Y B</Link></h1>
                {isMobile
                    ? !menuOpen ? <FontAwesomeIcon icon={faChevronDown} role='button' className='HomeLink' onClick={e => this.openMenu()}/> : this.renderHamburgerMenu()
                    : this.renderNavList()}
        </section>
    }
}