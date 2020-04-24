import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNodeJs, faHtml5, faCss3Alt, faReact} from '@fortawesome/free-brands-svg-icons'
import postgresql from '../src/assets/postgresql.jpg'
import canonize1 from '../src/assets/canonize1.png'
import canonize2 from '../src/assets/canonize2.png'
import canonize3 from '../src/assets/canonize3.png'
import canonize_mobile1 from '../src/assets/canonize_mobile1.png'
import canonize_mobile2 from '../src/assets/canonize_mobile2.png'
import canonize_mobile3 from '../src/assets/canonize_mobile3.png'
import indecisio1 from '../src/assets/indecisio1.png'
import indecisio_mobile1 from '../src/assets/indecisio_mobile1.png'
import indecisio2 from '../src/assets/indecisio2.png'
import indecisio_mobile2 from '../src/assets/indecisio_mobile2.png'
import indecisio3 from '../src/assets/indecisio3.png'
import indecisio_mobile3 from '../src/assets/indecisio_mobile3.png'


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
            screenshots_desktop: [
                {
                    original: canonize1,
                },
                {
                    original: canonize2,
                },
                {
                    original: canonize3,
                },
            ],
            screenshots_mobile: [
                {
                    original: canonize_mobile1,
                },
                {
                    original: canonize_mobile2,
                },
                {
                    original: canonize_mobile3
                },
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
            screenshots_desktop: [
                {
                    original: canonize1,
                },
                {
                    original: canonize2,
                },
                {
                    original: canonize3,
                },
            ],
            screenshots_mobile: [
                {
                    original: canonize_mobile1,
                },
                {
                    original: canonize_mobile2,
                },
                {
                    original: canonize_mobile3
                },
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
            screenshots_desktop: [
                {
                    original: indecisio1,
                },
                {
                    original: indecisio2,
                },
                {
                    original: indecisio3,
                },
            ],
            screenshots_mobile: [
                {
                    original: indecisio_mobile1,
                },
                {
                    original: indecisio_mobile2,
                },
                {
                    original: indecisio_mobile3,
                },
            ]
        },
    ]
}