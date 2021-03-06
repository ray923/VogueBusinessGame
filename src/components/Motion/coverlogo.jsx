
import React from 'react';
import coverlogo from '../../asserts/pic/logo.png';
import { useSpring, animated, config } from 'react-spring';

function CoverLogo() {

    const animate = useSpring({ 
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        from: { opacity: 0, transform: 'translate3d(0,0,0)' },
        config:config.molasses
    });
    
    return (
        <animated.div style={animate} className="App-cover-logo">
            <img rel="preload" src={coverlogo} alt="altcoverlogo"></img>
        </animated.div>
     )
   }
   
   export default CoverLogo;