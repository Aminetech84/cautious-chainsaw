import React, { useEffect, useRef } from 'react'
import Style from '../../public/style/main.css';

import { TweenMax, Power3, Power2, gsap } from 'gsap';


function Preload() {
    let preLoad = useRef(null);

    useEffect(() => {
        console.log(preLoad);
      
        gsap.to(preLoad, 2, { display: 'none', ease: Power2.easeInOut })
    })

    return (
        <div ref={el => { preLoad = el }} className='w-full flex content-center flex-wrap mx-auto w-full h-screen bg-blue-300'>
            <div className='w-screen'>
                <h1 className='text-6xl text-black-500 text-bold text-center'>Header</h1>

            </div>

        </div>
    )
}

/**
 *
 * 
 * 
 * <>
            
        </>
 */

export default Preload
