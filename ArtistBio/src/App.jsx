import { useState, useEffect } from 'react'

import './App.css'
import imageFiles from "../public/imageFiles";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


function App() {



  return (
    <div id="site-container">
      <div id="artist-intro">
        <h2 className="title">Sophie <span className="pink">Walden</span></h2>
        <h3 className="sub-message">Programming by Trade, Artist by Accident</h3>
      </div>
      <div id="art-showoff">

        
        <div className="masonry">
          {imageFiles.sort().map((image, index) => (
            <Tilt options={defaultOptions} key={index} className="image-item">
              <img className="display-image masonry-item react-tilt" src={`${image}`}  />
            </Tilt>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default App
