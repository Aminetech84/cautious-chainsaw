/**
 * Building blocks of this level would usually be from components
 */



import React, { useEffect, useRef } from 'react'
import Style from '../../public/style/main.css'
import { TweenMax, Power3, Power2, gsap } from 'gsap';
import pic from '../../public/images/pic1.jpg';
import vid from '../../public/videos/Haerfest_Website_960.mp4'
/*
import Preload from '../components/Preload'
import Div1 from '../components/Div1'
import Div2 from '../components/Div2'*/

//import pic from '../../public/images/pic1.jpg'

//import Preload from '../components/Preload'
//import vid from '../../public/videos/Haerfest_Website_960.mp4'




/* #6d7a71 */

function Header() {
    let preLoad = useRef(null);
    let navBar = useRef(null);
    let h1 = useRef(null);
    let hr = useRef(null);
    let header = useRef(null);

    useEffect(() => {
        console.log(preLoad);



        console.log(navBar);
        let tl = gsap.timeline({
            delay: 0,
        });

        tl.from(preLoad, 1, { opacity: 0, display: 'none', ease: Power2.easeInOut })
            .to(preLoad, 1, { opacity: 0, display: 'none', ease: Power2.easeInOut })
            .from(header, 1, { opacity: 0, display: 'none', ease: Power2.easeInOut })
            .from(navBar, 1, { opacity: 0, y: -30, ease: Power2.easeInOut })
            .from(hr, 1, { width: 0, ease: Power2.easeInOut }, "-=0.5")


    }, [])





    return (

        <div>

            <div ref={el => { preLoad = el }} className='w-full flex content-center flex-wrap mx-auto w-full h-screen bg-blue-300'>
                <div className='w-screen'>
                    <h1 className='text-6xl text-black-500 text-bold text-center'>Header</h1>

                </div>

            </div>


            <div ref={el => { header = el }} >
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


                        <hr ref={el => { hr = el }} className="w-1/3" />
                    </div>


                </div>
                <div className=' bgg absolute inset-0  flex flex-row-reverse flex w-full'>


                    <div className="sm:w-2/3">
                        <video id="bg-vid" loop autoPlay className='h-full'>
                            <source src={vid} type="video/mp4" />
                            <source src={vid} type="video/ogg" />
    Your browser does not support the video tag.
</video>
                    </div>
                </div>
            </div>






        </div>


    )
}

/**
 * 
 *  
           let header = useRef(null);
    let header1 = useRef(null);

    useEffect(() => {
        gsap.from(header, { opacity: 0, display: "none", duration: 5, delay: 3, ease: Power2.easeInOut })
        gsap.from(header1, 2, { opacity: 0, display: "none", delay: 5, ease: Power2.easeInOut })
    })

    return (
        <div className=' w-full h-screen'>
            <div ref={el => { header = el }} >
                <Preload />
            </div>

            <div ref={el => { header1 = el }} className="invisible"></div>
            <Div1 />
            <Div2 />
        </div>
 * 
 * 
 * 
 */





/***
 * 

      


 *  
 *  <div className="g bg-blue-400 ">
                <h1>fukkkkkkkkkkk</h1>
            </div>
 * 
 *  <Preload />
 * 
 * 
 * <video id="bg-vid" loop autoPlay className=''>
                        <source src={vid} type="video/mp4" />
                        <source src={vid} type="video/ogg" />
    Your browser does not support the video tag.
</video>
 * 
 * style={headerColor} 
 * const headerColor = { backgroundColor: "#6d7a71" }
 * const headerColor = () => width < 500? 'bg-blue-900' : 'bg-red-300'
 */




export default Header
