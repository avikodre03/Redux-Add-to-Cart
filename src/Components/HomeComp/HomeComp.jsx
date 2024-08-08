import React from 'react'
import './HomeComp.css'
import video from "../Assets/Videos/video-1.mp4"
const HomeComp = () => {
  return (
    <div className='homeComp'>
        <video controls muted autoPlay loop>
            <source src={video}/>
        </video>
        <div className="homeCompOverlay">
            <h1>Shopify Shopping cart</h1>
            <p>Lorem ipsum dolor sit amet. Necessitatibus reprehenderit aspernatur vitae aliquid dicta asperiores debitis cupiditate obcaecati laudantium magnam.
             consectetur adipisicing elit.vitae aliquid dicta asperiores debitis cupiditate obcaecati laudantium magnam
             consectetur adipisicing elit. Necessitatibus reprehenderit aspernatur vitae aliquid dicta asperiores debitis cupiditate obcaecati laudantium magnam</p>
       <button>Explore More..!!</button>
        </div>
    </div>
  )
}

export default HomeComp