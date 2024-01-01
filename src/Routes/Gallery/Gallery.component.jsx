import { useEffect, useState } from 'react'
import './Gallery.styles.scss'
import Image from '../../Components/Image/Image.component'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Gallery, Item } from 'react-photoswipe-gallery'

const Gallerys = (props) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();
  const [currSrc, setCurrSrc] = useState("");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='gallery'>
      <div className='img-wrapper'>
        {galleryUrls.map((src) => (
          <span onClick={() => setCurrSrc(src)}>
            <Image imgSrc={src}></Image>
          </span>
        ))}
      </div>
    </div>
    <div className='carusel'>
      <img src={currSrc}/>
        <div>
          <div></div>
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
