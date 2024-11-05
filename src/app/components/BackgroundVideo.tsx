import React from 'react'
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <video 
          src="/videos/bg-loop.mp4"
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
    />
  )
}

export default BackgroundVideo