import { useEffect, useState, useContext } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import NavBar from '../../Components/NavBar/NavBar.component';
import Cursor from '../../Components/Cursor/Cursor.component';
import useFetch from '../../Hooks/useFetch.effect';
import GalleryContext from '../../Contexts/Gallery.context';
import './Layout.styles.scss'

const Layout = () => {
    const { setGalleryUrls } = useContext(GalleryContext);
    let { Data, isLoading } = useFetch(`/.netlify/functions/fetchMedia`, false);


    useEffect(() => {
        setGalleryUrls(Data);
        console.log(Data);
    }, [Data]);

    return (
        <>
            <div className='bg'></div>
            <Cursor></Cursor>
            <NavBar></NavBar>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
