import { useState, useEffect } from 'react'
import './Videos.styles.scss'

const Videos = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  async function getData() {
    let response = await fetch('/.netlify/functions/fetchVideos');
    let htmlText = await response.text();
    console.log(htmlText);
    let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
    urls = urls.map(fixUrlArr);
    console.log(urls);
    setVideoUrls(urls);

    // test code:
    // let urls = galleryUrls;
    // urls = urls.map(fixUrlArr);
    // console.log(urls);
    // setVideoUrls(urls);
  }

  const fixUrlArr = (url) => {
    url = url.replace("file/d/", 'uc?export=view&id=');
    url = url.replace("/view?usp=drive_web", '');
    return url;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div><p>{videoUrls[0]}</p>
      <video width="320" height="240" controls>
        <source src={videoUrls[0]} type="video/mp4"></source>
        
      </video>
    </div>
  )
}

export default Videos
