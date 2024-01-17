import React, { useEffect, useState, useContext } from 'react'
import './Gallery.styles.scss'
import Image from '../../Components/Image/Image.component';
import arrow from '../../assets/images/next.png';
import close from '../../assets/images/close.png';
import useFetch from '../../Hooks/useFetch.effect';
import 'photoswipe/style.css';
import CursorContext from "../../Components/Cursor/context/CursorContext";
import GalleryContext from '../../Contexts/Gallery.context';

const Gallery = (props) => {
  const { setType } = useContext(CursorContext);
  const {galleryUrls} = useContext(GalleryContext);

  // const {galleryUrls, isLoading} = useFetch(`/.netlify/functions/fetchMedia`);
  const [currSrc, setCurrSrc] = useState("");
  const [currSrcIndex, setCurrSrcIndex] = useState("");
  const [showCarusel, setShowCarusel] = useState(false);
  // const [galleryUrls, setGalleryUrls] = useState([]);
  
  async function getData() {
    let response = await fetch('/.netlify/functions/fetchMedia');
    let htmlText = await response.text();
    let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
    urls = urls.map(fixUrlArr);
    console.log(urls);
    setGalleryUrls(urls);

    // test code:
    // let urls = galleryUrls;
    // urls = urls.map(fixUrlArr);
    // console.log(urls);
    // setGalleryUrls(urls);
  }

  const fixUrlArr = (url) => {
    console.log("url " + url);
    url = url.replace("file/d/", 'uc?export=view&id=');
    url = url.replace("/view?usp=drive_web", '');
    return url;
  }

  const toggleCarusel = (num) => {
    let length = galleryUrls.length;
    setCurrSrc(galleryUrls[((currSrcIndex + num) % length + length) % length]); 
    setCurrSrcIndex(currSrcIndex + num);
  }

  useEffect(() => {
    // getData();
    // console.log(isLoading);
  }, []);

  return (
    <>
      <div className='gallery'>
      <iframe src="https://drive.google.com/file/d/1LQvOe2jmEFj-RHNNQHJ1tMTcA4FJ9FUm/preview" ></iframe>
      <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTrvb6BDEHjtZSQGSXs27LjepgCHA3fKt-OXMFjV7jscMhQrbfJwDFzYUI8j8fcpGgpuEvtsIOdXx1IHBzu1LJc_ggjhQ=w1891-h1010" />
        <div className='img-wrapper'>
          {galleryUrls ? galleryUrls.map((src, index) => (
            <span key={src} onClick={() => {setCurrSrc(src); setCurrSrcIndex(index); setShowCarusel(true)}}>
              <Image imgSrc={src} ></Image>
            </span>
          )) : null }
          {/* <h1>hell to the no</h1> */}
        </div>
        <div className='fade-bottom'></div>
      </div>
      <div className='carusel' style={showCarusel ? {opacity: 1} : {opacity: 0, pointerEvents: 'none'}}>
        <img className='close-btn' src={close} onMouseEnter={() => {setType("hamburger")}} onMouseLeave={() => setType("default")} onClick={() => setShowCarusel(false)}></img>
        <div style={{backgroundImage: `url(${currSrc})`}} className='carusel-img'></div>
        <div className='arrow-container'>
          <img className='arrow mirror' src={arrow}  onMouseEnter={() => {setType("hamburger")}} onMouseLeave={() => setType("default")} onClick={() => toggleCarusel(-1)} draggable="false"></img>
          <img className='arrow' src={arrow} onMouseEnter={() => {setType("hamburger")}} onMouseLeave={() => setType("default")} onClick={() => toggleCarusel(1)} draggable="false"></img>
        </div>
      </div>
      {/* <Gallery>
      <div className='img-wrapper'>
        {galleryUrls.map((src) => (
          <Item key={src}
            original={src}
            thumbnail={src}
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={src} className='try'/>
            )}
          </Item>
        ))}
        </div>
      </Gallery> */}
    </>

  )
}

export default Gallery
