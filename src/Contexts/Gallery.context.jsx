import { createContext, useState } from "react";

export const GalleryContext = createContext({
    galleryUrls: [],
    setGalleryUrls: () => [],
});
export const GalleryProvider = ({children}) => {
    const [galleryUrls, setGalleryUrls] = useState([]);
    const value = {galleryUrls, setGalleryUrls};
    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
} 

export default GalleryContext;