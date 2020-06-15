import React from 'react'
import Style from '../../public/style/main.css'
import pic from '../../public/images/pic1.jpg';
//import vid from '../../public/videos/Haerfest_Website_960.mp4'

function Div2() {

    return (

        <div className=' bgg absolute inset-0  flex flex-row-reverse flex w-full'>

            <div className="sm:w-2/3">
            <img src={pic} alt="pic" className='h-screen' />
            </div>
        </div>



    )

}


/**
 *  <img src={pic} alt="pic" className='h-full' />
 * 
 * <video id="bg-vid" loop autoPlay className='h-full'>
                    <source src={vid} type="video/mp4" />
                    <source src={vid} type="video/ogg" />
    Your browser does not support the video tag.
                </video>
 */
export default Div2
