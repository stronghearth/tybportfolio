import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNodeJs, faHtml5, faCss3Alt, faReact} from '@fortawesome/free-brands-svg-icons'
import postgresql from '../src/assets/postgresql.jpg'
import canonize_small from '../src/assets/canonize_small.png'
import canonize from '../src/assets/canonize.png'
import canonize_3 from '../src/assets/canonize_3.png'
import indecisio1 from '../src/assets/indecisio1.png'
import indecisio2 from '../src/assets/indecisio2.png'
import indecisio3 from '../src/assets/indecisio3.png'


export default {
       "projects": [ {
            id: 1,
            name: 'Canonize',
            description: 'When you register with Canonize, you can make a record of all the characters who live in your story. Once many characters become a part of your Canon, you can easily find individuals and expand your notes on them if you wish. Canonize is a great tool for fiction writers and tabletop role-playing game masters alike.',
            liveApp: 'https://canonize.now.sh/',
            client: 'https://github.com/stronghearth/canonize-client',
            server: 'https://github.com/stronghearth/canonize-server',
            languageIcons: [
                <FontAwesomeIcon aria-disabled='true' icon={faHtml5}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faCss3Alt}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faReact}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faNodeJs}/>,
                <img src={postgresql} aria-disabled='true' alt="postgresql"/>
            ],
            screenshots: [
                <img src={canonize} className="mainScreenShot" alt="Canonize Homepage"/>,
                <img src={canonize_small} alt="Canonize Character"/>,
                <img src={canonize_3} alt="Canonize Edit Character"/>
            ]
        },
        {
            id: 2,
            name: 'Catalan Cards',
            description: 'Learn the Catalan language, exclusive to Barcelona, Spain, through the spaced repetition technique. Words you haven\'t memorized yet will appear more often! Keep track of your overall score and how often you\'ve gotten a word correct! I built this app with a partner.',
            liveApp: 'https://catalan-repetition.now.sh/',
            client: 'https://github.com/stronghearth/spaced-repetition',
            server: 'https://github.com/jordanxcast/spaced-repetition-api',
            languageIcons: [
                <FontAwesomeIcon aria-disabled='true' icon={faHtml5}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faCss3Alt}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faReact}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faNodeJs}/>,
                <img src={postgresql} aria-disabled='true' alt="postgresql"/>
            ],
            screenshots: [
                <img src={canonize} className="mainScreenShot" alt="Canonize Homepage"/>,
                <img src={canonize_small} alt="Canonize Character"/>,
                <img src={canonize_3} alt="Canonize Edit Character"/>
            ]
        },
        {
            id: 3,
            name: 'Indecisio',
            description: 'Indecisio is a randomized activity suggestion application for people who need suggestions of what to do while stuck in quarantine during COVID-19. Users can add suggestions to the randomized activity pool and build a profile of what activites they have completed the most. I built this application with two other developers.',
            liveApp: 'https://indecisio.now.sh/',
            client: 'https://github.com/thinkful-ei-jaguar/indecisio-client',
            server: 'https://github.com/stronghearth/indecisio-server',
            languageIcons: [
                <FontAwesomeIcon aria-disabled='true' icon={faHtml5}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faCss3Alt}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faReact}/>,
                <FontAwesomeIcon aria-disabled='true' icon={faNodeJs}/>,
                <img src={postgresql} aria-disabled='true' alt="postgresql"/>
            ],
            screenshots: [
                <img src={indecisio1} className="mainScreenShot" alt="Indecisio Dashboard"/>,
                <img src={indecisio2} alt="Indecisio Add Activity"/>,
                <img src={indecisio3} alt="Indecisio Home Page Mobile"/>
            ]
        },
    ]
}