import { useEffect, useState, useContext } from 'react'
import './Gallery.styles.scss'
import Image from '../../Components/Image/Image.component';
import arrow from '../../assets/images/next.png';
import close from '../../assets/images/close.png';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import CursorContext from "../../Components/Cursor/context/CursorContext";

const Gallerys = (props) => {
  const { setType } = useContext(CursorContext);
  const [currSrc, setCurrSrc] = useState("");
  const [currSrcIndex, setCurrSrcIndex] = useState("");
  const [showCarusel, setShowCarusel] = useState(false);
  const [galleryUrls, setGalleryUrls] = useState([
    "https://drive.google.com/file/d/1FLRGo0qlteSKFt0eg2AI9EFG-UPaRw96/view?usp=drive_web",
    "https://drive.google.com/file/d/1tQyGIPqZs0kHabGHCRRLrip9GBO6MSQW/view?usp=drive_web",
    "https://drive.google.com/file/d/16oCD06UZ6U-pxJ0DhVlpKeLcRRDUf5Us/view?usp=drive_web"
  ]);
  async function getData() {
    // let response = await fetch('/.netlify/functions/fetchMedia');
    // let htmlText = await response.text();
    // let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
    // urls = urls.map(fixUrlArr);
    // console.log(urls);
    // setGalleryUrls(urls);

    // test code:
    let urls = galleryUrls;
    urls = urls.map(fixUrlArr);
    console.log(urls);
    setGalleryUrls(urls);
  }

  const fixUrlArr = (url) => {
    url = url.replace("file/d/", 'thumbnail?id=');
    url = url.replace("/view?usp=drive_web", '');
    return url;
  }

  const toggleCarusel = (num) => {
    let length = galleryUrls.length;
    setCurrSrc(galleryUrls[((currSrcIndex + num) % length + length) % length]); 
    setCurrSrcIndex(currSrcIndex + num);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='gallery'>
        <div className='img-wrapper'>
          {galleryUrls.map((src, index) => (
            <span onClick={() => {setCurrSrc(src); setCurrSrcIndex(index); setShowCarusel(true)}}>
              <Image imgSrc={src}></Image>
            </span>
          ))}
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

export default Gallerys
