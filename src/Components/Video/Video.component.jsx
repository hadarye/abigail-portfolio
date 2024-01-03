import React from "react";
import './Video.styles.scss'

const Video = (props) => {
  return (
    <>
      <iframe className="video" src={props.videoSrc} controls ></iframe>
    </>
  )
}
export default Video
