import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import coverp from '../asserts/pic/cover.png';
import covertitle from '../asserts/pic/covertitle.png';
import covercontent from '../asserts/pic/covercontent.png';
import CoverLogo from './Motion/coverlogo';
import CoverTitle from './Motion/covertitle';
import {animated,useSpring,config} from 'react-spring';
import start from '../asserts/pic/start.png';


import q1p from '../asserts/pic/q1p.png';
import acontent1 from '../asserts/pic/optacontent1.png';
import acontent2 from '../asserts/pic/optacontent2.png';
import acontent3 from '../asserts/pic/optacontent3.png';
import bcontent1 from '../asserts/pic/optbcontent1.png';
import bcontent2 from '../asserts/pic/optbcontent2.png';
import bcontent3 from '../asserts/pic/optbcontent3.png';

// import q3background from '../asserts/pic/q3background.png';
// import Q3clock from '../asserts/pic/Q3clock.png'
// import q4acontent from '../asserts/pic/q4acontent.png';
// import q4apattern from '../asserts/pic/q4apattern.png';
// import q4bcontent from '../asserts/pic/q4bcontent.png';
// import q4bpattern from '../asserts/pic/q4bpattern.png';
// import q5p from '../asserts/pic/q5p.png';

// import backgroundImg from '../asserts/pic/fillnamebackground.png'
// import resultAp from '../asserts/pic/resultAp.png';
// import resultBp from '../asserts/pic/resultBp.png';
// import resultCp from '../asserts/pic/resultCp.png';
// import resultDp from '../asserts/pic/resultDp.png';

import {Lines} from 'react-preloaders';

export default function Cover() {    

    const people = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 2500,
        config: { mass: 5, tension: 2000, friction: 1000 }
    })

    const startstyle = useSpring({
        from: { opacity: 1, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 2900,
        config: config.slow
    })
    const circleblue = useSpring({
        from: { transform: 'scale(0)'},
        to: { transform: 'scale(1)'},
        delay: 2500,
        config: { mass: 1, tension: 100, friction: 30 }
    })

    const wordstyle = useSpring({
        from: { height:'0rem', opacity:0},
        to: { height:'1.324rem',opacity:1},
        delay: 3200,
        config: { mass: 1, tension: 100, friction: 30 }
    })


    
    return (
        <>
        
        <div className="App">
            <CoverLogo/>
            <CoverTitle/>
            <animated.div className="App-Cover-circle-b" style={circleblue}>
            <div className="App-Cover-circle-bopacity"></div>
            <div>
                <img alt="content" rel="preload" src={covertitle} className="App-Cover-circle-b-0"></img>
                <animated.img style={wordstyle} alt="content" rel="preload" src={covercontent} className="App-Cover-circle-b-1"></animated.img>
            </div>
            <div className="cover-slash"></div>
            <Link to={'/q1'}>
                    <animated.div className="App-Cover-circle-p" style={startstyle}>
                        <img rel="preload" src={start} alt='start'></img>
                    </animated.div>
                
            </Link>
            </animated.div>
            <animated.div className="App-Cover-P" style={people}>
                <img rel="preload" src={coverp} alt="coverps"></img>
            </animated.div> 
        </div>

        <div className="noshow">
            <img src={q1p} alt="preload"></img>
            <img src={acontent1} alt="preload"></img>
            <img src={acontent2} alt="preload"></img>
            <img src={acontent3} alt="preload"></img>
            <img src={bcontent1} alt="preload"></img>
            <img src={bcontent2} alt="preload"></img>
            <img src={bcontent3} alt="preload"></img>
        </div>
        <Lines time={800}/>
        </>          
    );
}
