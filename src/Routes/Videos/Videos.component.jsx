import { useState, useEffect } from 'react'
import './Videos.styles.scss'
import Video from '../../Components/Video/Video.component'

const Videos = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  async function getData() {
    let response = await fetch('/.netlify/functions/fetchVideos');
    let htmlText = await response.text();
    let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
    urls = urls.map(fixUrlArr);
    setVideoUrls(urls);
  }

  const fixUrlArr = (url) => {
    url = url.replace("view?usp=drive_web", 'preview');
    return url;
  }

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className='videos-container'>
      {videoUrls.map((src) => (
        <Video videoSrc={src}></Video>
      ))}
    </div>
  )
}

export default Videos
