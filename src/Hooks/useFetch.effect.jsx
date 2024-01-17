import { useState, useEffect } from 'react';

const useFetch = (link, videos) => {
  // it is best to initialize the state as null because response.data
  // may be an object or an array depending on the API response

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryUrls, setGalleryUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        let response = await fetch(link);
        let htmlText = await response.text();
        let urls = htmlText.match(/(?<=<a href=").+?(?=")/g);
        if (videos) {
          urls = urls.map(fixVideoUrlArr);
        } else {
          urls = urls.map(fixPicUrlArr);
        }
        setData(urls);
        // console.log(urls);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }, [link]);

  const fixPicUrlArr = (url) => {
    url = url.replace("file/d/", 'uc?export=view&id=');
    url = url.replace("/view?usp=drive_web", '');
    return url;
  }

  const fixVideoUrlArr = (url) => {
    url = url.replace("view?usp=drive_web", 'preview');
    return url;
  }

  return { Data: data, isLoading: isLoading };
};

export default useFetch;