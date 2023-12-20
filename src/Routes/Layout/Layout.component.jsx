import { useState } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import NavBar from '../../Components/NavBar/NavBar.component';
import Cursor from '../../Components/Cursor/Cursor.component'
import './Layout.styles.scss'

const Layout = () => {

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
