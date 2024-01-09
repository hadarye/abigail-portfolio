import { useState, useEffect } from 'react';

const useFetch = (link) => {
  // it is best to initialize the state as null because response.data
  // may be an object or an array depending on the API response

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryUrls, setGalleryUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    if(galleryUrls.length === 0 || videoUrls.length === 0)
    try {
      const fetchData = async () => {
        setIsLoading(true);
        let response = await fetch(link);
        let htmlText = await response.text();
        let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
        urls = urls.map(fixUrlArr);
        setData(urls);
        console.log(urls);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }, [link]);

  const fixUrlArr = (url) => {
    url = url.replace("file/d/", 'uc?export=view&id=');
    url = url.replace("/view?usp=drive_web", '');
    return url;
  }
  return {galleryUrls: data, isLoading: isLoading};
};

export default useFetch;