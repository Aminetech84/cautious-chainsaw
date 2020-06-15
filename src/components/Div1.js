import React, { useEffect, useRef } from 'react';
import Style from '../../public/style/main.css';

import { TweenMax, Power3, Power2, gsap } from 'gsap';

function Div1() {
    //console.log(props.class);
    
    let navBar = useRef(null);
    let h1 = useRef(null);
    let hr = useRef(null);


    useEffect(() => {
        console.log(navBar);
        let tl = gsap.timeline({
            delay: 0,
        });
        tl.from([navBar, h1], 2, { opacity: 0,  ease: Power2.easeInOut })
          .from(hr, 2, { width: 0,  ease: Power2.easeInOut })
          //.from(header, 2, { height: null, ease: Power2.easeInOut })

    }, [])



    return (
        <div className='absolute z-50 text-white w-full h-screen' >
            <nav ref={el => { navBar = el }} className='bg-transparent w-full sm:text-lg text-sm '>
                <ul className='py-2 px-1 flex'>

                    <li className='w-1/3 text-left'>
                        <a href="">Store</a>
                    </li>
                    <li className='w-1/3 text-justify'>
                        <a href="" className='mr-2'>Men</a>
                        <a href="" className='mx-2'>Women</a>
                        <a href="" className='mx-2'>Explore</a>
                    </li>

                    <li className='w-1/3 text-right'>
                        <a href="" className='ml-2'>More</a>
                        <a href="" className='mx-2'>Below</a>
                        <a href="" className='mr-2'>Yeah</a>
                    </li>

                </ul>
            </nav>
            <div className="my-32 ml-16">
                <h1 ref={el => { h1 = el }} className="text-3xl">Apollo Collection</h1>
                <span className="text-base">The best bags designed for the new era of work <br />Discover</span>


                <hr ref={el => { hr = el }} className="w-1/3"  />
            </div>


        </div>
    )


}

/*
//animate <hr />
 .trans--grow{
  
  transition: width 5s  ease-out;
  width : 0%;

  setTimeout(function(){
    $('.trans--grow').addClass('grow');
}, 500);





{' absolute h-20 m text-red-900 bg-blue-200 '&& `${m}` }
const col1 = {
    backgroundColor: '#ccc'
}
const col45 = {
    width: props.class
}
console.log(col45);*/

/**
 * <div className='w-full h-screen bg-gray-400'>

            <div className=' absolute inset-0 opacity-75 w-full bg-gray-500'>
                <div className="w-1/3 h-full bg-blue-600"></div>
                <div className="w-2/3 bg-red-600"></div>
            </div>
            <div className=' absolute inset-0 opacity-50 w-full bg-orange-500'>
                <div className="w-full h-32 bg-green-600"></div>
                <div className="w-full h-16 bg-red-600"></div>
            </div>
            <div className={m} >
                <p className='f sticky top-0'>hereeeeee</p>
                <h1 className='my-32 ml-16 text-6xl f'>Apollo </h1>
            </div>


        </div>
 * 
 */

export default Div1
